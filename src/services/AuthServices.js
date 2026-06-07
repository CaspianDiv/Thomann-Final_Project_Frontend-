import thommanInstance from "../api/axiosInstance";

async function userSignUp(user) {
    try {
        const res = await thommanInstance.get(`/users?email=${user.email}`);
        if (res.data.length) {
            throw new Error(" This email is already  registered ! ");
        };
        const newUser = await thommanInstance.post("/users" , user)
        return newUser.data        
    } catch (error) {
        console.error(error.message || " An error occured new user registiration ! ");
    }
};

async function userSignIn(user) {
    try {
        const newUser = await thommanInstance.get(`/users?email=${user.email}&password=${user.password}`);
        if (!newUser.data.length) {
            throw new Error(" Email or password is invalid ! ");
        };
        return newUser.data        
    } catch (error) {
        throw new Error(error.message || " An error occured new user registiration ! ");
    }
};

export {
    userSignUp,
    userSignIn
};

