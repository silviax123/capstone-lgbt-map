import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import axios from './api/axios';

const USER_REGEX = /^[A-Za-z][A-Za-z0-9_]{3,23}$/;
const PWD_REGEX = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const REGISTER_URL = '/register';

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    //user field
    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] =  useState(false);

    // set the focus on the user name. happen when the component loads
    useEffect(() => {
        userRef.current.focus();
    }, [])

    // applied to the user name. where we validate the user name
    // the user state is in the dependency array, anytime it chages, 
    // it will check the validation of that field
    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    },[user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        // the confirmation is defined w match by comparing pwd to the match pwd state
        setValidMatch(pwd === matchPwd); // return boolean
    }, [pwd,matchPwd]) // any one changed valid match will check (sync)


    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd]) // clear out ErrMsg when user change one of 3 states

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(user);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry")
            return;
        }
        console.log(user, pwd)
        setSuccess(true);
        // try {
        //     const responese = await axios.post(REGISTER_URL,
        //         JSON.stringify({ user, pwd }),
        //         {
        //             headers: { 'Content-Type': 'application/json' },
        //             withCredentials: true
        //         })
        //         console.log(response.data);
        //         console.log(response.accessToken)
        //         console.log(JSON.stringify(response))
        //         setSuccess(true);
        //     } catch(err){
        //         if (!err?.responese) {
        //             setErrMsg('No Server Response');
        //         } else if (err.responese?.status === 409) {
        //             setErrMsg('Username Taken')
        //         }else {
        //             setErrMsg('Registrration Failed')
        //         }
        //         errRef.current.focus()
        // }
    } 

    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="#">Sign In</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} 
                    // if the errMsg exist, there is the errMsg state
                    className={errMsg ? "errmsg" : "offscreen"} 
                    aria-live="assertive">{errMsg}</p>
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">
                            Username:
                            <span className={validName ? "valid" : "hide"}>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className={validName || !user ? "hide" :
                            "invalid"}>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                        </label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <p id="uidnote" className={userFocus && user && 
                        !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>
                        
                        <label htmlFor="password">
                            Password:
                            <span className={validPwd ? "valid" : "hide"}>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className={validPwd || !pwd ? "hide" : "invalid"}>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : 
                        "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            must include uppercase and lowercase letters, a number and a 
                            special character.<br />
                            Allowed special characters: 
                            <span aria-label="exclamation mark">!</span>
                            <span aria-label="at symbol">@</span> 
                            <span aria-label="hashtag">#</span>
                            <span aria-label="dollar sign">$</span>
                            <span aria-label="percent">%</span>

                        </p>

                        <label htmlFor="confirm_pwd">
                            Confirm Password:
                            <span className={validMatch && matchPwd ? "valid" : "hide"}>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                        </label>
                        <input
                            type="password"
                            id="cinform_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : 
                        "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field
                        </p>

                        <button disabled={!validName || !validPwd || !validMatch ? true : false}>
                            Sign Up
                        </button>
                    </form>
                    <p>
                        Already registered?<br />
                        <span className="line">
                            {/* put router link here */}
                            <a href="*">Sign In</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Register