import PocketBase from 'pocketbase';

const BASE_URL = import.meta.env.VITE_POCKETBASE_URL || 'http://127.0.0.1:8090';

/**
 * Singleton PocketBase client
 * Usage:
 *   import pb from '$lib/Pocketbase';
 *   import { login, logout, getCurrentUser } from '$lib/Pocketbase';
 */
const pb = new PocketBase(BASE_URL);

/**
 * Authenticate a user with email & password.
 * Returns the authenticated user record on success.
 */
export async function login(email, password) {
    if (!email || !password) throw new Error('Missing credentials');
    await pb.collection('users').authWithPassword(email, password);
    return pb.authStore.record;
}

/**
 * Create a new user (register).
 * Optionally auto-logins if email & password are present in `data`.
 */
export async function register(data = {}) {
    if (!data || typeof data !== 'object') throw new Error('Invalid data');
    const record = await pb.collection('users').create(data);
    if (data.email && data.password) {
        await pb.collection('users').authWithPassword(data.email, data.password);
    }
    return record;
}

/** Clear auth (logout) */
export function logout() {
    pb.authStore.clear();
}

/** Current authenticated user record (or null) */
export function getCurrentUser() {
    return pb.authStore.record || null;
}

/** Boolean: is there a valid auth session? */
export function isAuthenticated() {
    return Boolean(pb.authStore.isValid);
}

/**
 * Register a callback to auth changes.
 * The callback receives the current auth token (or null).
 */
export function onAuthChange(cb) {
    if (typeof cb !== 'function') return;
    // PocketBase authStore exposes onChange which is called with token (or null)
    pb.authStore.onChange(cb);
}

/** Change the PocketBase base URL at runtime (if needed) */
export function setBaseUrl(url) {
    if (typeof url === 'string' && url.length) {
        pb.baseUrl = url;
    }
}

export default pb;