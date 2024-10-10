import { useState } from 'react';
import * as Keychain from 'react-native-keychain';

const useAuthToken = () => {
    const [token, setToken] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const storeToken = async (jwtToken: string) => {
        try {
            // Store the token securely
            await Keychain.setGenericPassword('auth', jwtToken);
            console.log('Token stored successfully');
            return { success: true };
        } catch (err) {
            console.error('Error storing the token:', err);
            setError(`Error storing token: ${err instanceof Error ? err.message : 'Unknown error'}`);
            return { success: false, error: err };
        }
    };

    const getToken = async () => {
        try {
            const credentials = await Keychain.getGenericPassword();
            if (credentials) {
                setToken(credentials.password);
                return { success: true, token: credentials.password };
            } else {
                console.log('No token found');
                return { success: false, error: 'No token found' };
            }
        } catch (err) {
            console.error('Error retrieving the token:', err);
            setError(`Error retrieving token: ${err instanceof Error ? err.message : 'Unknown error'}`);
            return { success: false, error: err };
        }
    };

    const removeToken = async () => {
        try {
            await Keychain.resetGenericPassword();
            setToken(null);
            console.log('Token removed successfully');
            return { success: true };
        } catch (err) {
            console.error('Error removing the token:', err);
            setError(`Error removing token: ${err instanceof Error ? err.message : 'Unknown error'}`);
            return { success: false, error: err };
        }
    };

    return { token, storeToken, getToken, removeToken, error };
};

export default useAuthToken;
