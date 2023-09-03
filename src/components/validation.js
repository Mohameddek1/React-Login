
const validation = (value) => {
    let error = {};

    if (!value.fullname) {
        error.fullname = "Name is required";
    }
    if (!value.email) {
        error.email = "email is required";
    }
    else if (!/\S+@\S+\.\S+$/.test(value.email)) {
        error.email = "email is invalid";
    }
    if (!value.password) {
        error.password = "password is required";
    }
    else if (value.password.length < 5) {
        error.password = "password must be more than five characters";
    }
    return error;
}
 
export default validation;