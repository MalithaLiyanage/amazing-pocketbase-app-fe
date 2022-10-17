import PocketBase from 'pocketbase';

const client = new PocketBase('http://127.0.0.1:8090');

export const createUser = async (userData) => {
    const user = await client.users.create({
        email: userData.email,
        password: userData.password,
        passwordConfirm: userData.passwordConfirm,
    });
    
    // set user profile data
    await client.records.update('profiles', user.profile.id, {
        name: userData.name,
    });
    
    // send verification email
    await client.users.requestVerification(user.email);
}

