/* eslint-disable @typescript-eslint/no-explicit-any */
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { useEffect, useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import { OAuth2Config, OAuth2ConfigFB } from "../../configs/config-google";
import { login } from "../../services/authentication";
import { getToken, setToken } from "../../services/localStorageToken";
import { validateFormLogin } from "../../utils/validateForm";



export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleContinueWithGoogle = () => {
    const callbackUrl = OAuth2Config.redirectUri;
    const authUrl = OAuth2Config.authUri;
    const googleClientId = OAuth2Config.clientId;

    const targetUrl = `${authUrl}?redirect_uri=${encodeURIComponent(
      callbackUrl
    )}&response_type=code&client_id=${googleClientId}&scope=openid%20email%20profile`;

    console.log(targetUrl);

    window.location.href = targetUrl;
  };

  const handleContinueWithFacebook = () => {
    const callbackUrl = OAuth2ConfigFB.redirectUri;
    const authUrl = OAuth2ConfigFB.authUri;
    const facebookClientId = OAuth2ConfigFB.clientId;

    const targetUrl = `${authUrl}?client_id=${facebookClientId}&redirect_uri=${encodeURIComponent(
      callbackUrl
    )}&state=${encodeURIComponent(
      JSON.stringify({ callbackUrl })
    )}&response_type=code&scope=email,public_profile`;

    console.log(targetUrl);

    window.location.href = targetUrl;
  };

  const handleLogin = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    const { isValid, usernameError, passwordError } = validateFormLogin(
      username,
      password
    );
    setUsernameError(usernameError);
    setPasswordError(passwordError);

    if (!isValid) return;

    try {
      const data = await login(username, password);

      if (data.code === 0) {
        setToken(data.result?.token);
        setErrorLogin("");
        toast.success("Login successful!");
        setIsLoggedIn(true);
      } else {
        setErrorLogin(data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred during login.");
    }
  };

  useEffect(() => {
    const accessToken = getToken();
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
      window.location.reload();
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <div className="col-12 d-flex justify-content-center mt-3 mb-3 ">
          <svg
            style={{ width: 60, height: 60 }}
            aria-hidden="true"
            className="swoosh-svg svg-style"
            focusable="false"
            viewBox="0 0 24 24"
            role="img"
            width="24px"
            height="24px"
            fill="none"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
              clipRule="evenodd"
            ></path>
          </svg>

          <svg
            aria-hidden="true"
            className="css-132diu7"
            focusable="false"
            viewBox="0 0 48 48"
            role="img"
            width="48px"
            height="48px"
            fill="none"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M26.363 7.467c-.024-.078-.024-.078-.024-.144a1.933 1.933 0 011.844-2.014 1.94 1.94 0 012.014 1.844 1.927 1.927 0 01-1.834 2.014c-.054.008-.124 0-.202 0-.032.008-.078.008-.112.044-.112.168.28.146-.01.878 0 0 0 .078-.024.156-.024.28-.158 1.124-.192 1.586.058.08.08.1.058.26-.024.212-.102.73-.18 1.068-.08.28-.192.348-.294.404-.146.596-.19 1.09-.562 1.81-.044.552-.09.698-.212.968-.034.798.022.92-.562 2.202-.16.598-.034 1.014.1 1.642.136.642.552.922.596 1.586.102 1.542.034 2.61-.326 3.814l.27.696c.36.168 1.236.652.72 1.35.686.38 1.73.788 2.562 1.562.35.294.698.63 1.024 1 .632.114.552.158 1.012.462 1.35.876 3.498 2.608 4.746 3.812.224.134.294.224.472.326.022.046.034.068.022.078-.054.146-.054.146-.122.282.078.08.19.146.268.214.08.01.08-.012.192-.034.158.146.36.27.428.27.212-.044.168-.01.37-.202.058-.068.168 0 .168 0 .082-.078.226-.236.428-.35.158-.09.462-.09.462-.09.102.012.078.102.056.146-.114.046-.36.114-.494.216-.304.28-.552.706-.552.706.598-.066.968.09 1.438.046.272-.01.474.012.754-.18 0 0 .282-.192.53-.282.236-.1.46-.032.662.126.136.168.236.168 0 .392-.09.09-.202.192-.36.338-.268.248-.628.584-1 .866-.382.28-.798.516-1.056.63-.676.46-.518.348-1.046.788-.058.044-.248.156-.326.212-.214.124-.27.012-.394-.236 0 0-.056-.09-.158-.282-.102-.212-.18-.46-.146-.46-.124-.012-.662-.686-.662-.82-.126-.024-.608-.518-.62-.62l-.428-.36c-.506.09-.618-.224-1.922-1.214-.158-.012-.394-.102-.72-.348-.596-.506-2.014-1.63-2.248-1.766-.26-.134-.562-.268-.766-.428-.292-.044-.436-.1-.596-.134-.158-.044-.28-.114-.652-.158-.606-.09-1.236-.36-1.822-.674-.28-.146-.528-.214-.764-.338-.54-.248-1.012-.472-1.372-.562-.136-.012-.798-.236-1.136-.45-.122-.068-.19-.122-.268-.146-.18-.044-.306.012-.384.044-.46.216-.876.406-1.272.62-.358.18-.696.372-1.056.572-.314.17-.686.338-1.068.508 0 0-1.068.506-1.664.696-.518.394-1.574 1.092-2.214 1.43-.316.146-.934.504-1.216.584-.158.122-.742.516-1.192.842-.36.248-.618.462-.618.462-.214.168-.204.258-.562.09a2.983 2.983 0 00-.258.192c-.282.19-.294.146-.406.134-.202.158-.226.078-.394.258-.122.17 0 .124-.236.214-.056.012-.078.078-.114.112-.188.146-.2.586-.65.608-.27.178-.214.406-.394.382 0 .204-.36.46-.428.46-.584.192-.608-.236-1.292.07-.09.032-.226.144-.394.168-.304.044-.664-.012-.888-.204-.338-.282-.652-.796-.652-.796-.102-.26-.034-.416.326-.664.146-.09.168-.158.416-.168.122-.048.09.02.302-.048.126-.032.126-.01.384-.01.056-.034.134-.044.248-.09.2-.068.392-.124.392-.124s.056-.046.248-.022c.156-.068.338-.158.428-.192-.024-.248.01-.248.122-.348.16-.124.18-.1.294-.022.044-.012.078-.024.054-.068-.02-.146-.122-.214-.09-.494-.044-.114-.122-.258-.098-.348.02-.09.054-.138.11-.158.058-.024.09.012.114.044.056.068.102.27.102.27.01.236.078.518.302.36.134-.124.168-.484.428-.406l.192.17c.168-.146.168-.146.28-.214 0 0-.158-.146-.024-.27.09-.078.216-.134.416-.35.552-.584.844-.84 1.428-1.314a13.622 13.622 0 013.398-1.878c.292-.348.562-.572 1.17-.608.754-1.212 2.17-2.272 2.496-2.44.268-.46.382-.416.73-.494.27-.214.35-.214.46-.428.126-.46-.224-1.72.766-1.754.224-.292.156-.224.392-.496a4.382 4.382 0 01-.236-1c-.01-.032-.392-.314-.258-.664-.158-.2-.46-.652-.538-.864a.403.403 0 01-.126-.024c-.044-.01-.11-.01-.18-.01-.156.392-.326.416-.606.506-.518 1.024-.698 1.462-2.092 2.284-.56.596-.764 1.28-.764 1.268-.102.204-.078.486-.024.642-.09.214-.054.248-.054.248.022.09.112.212.212.224.158.046.338.046.316.236-.022.226-.326.18-.474.146-.55-.1-.37-.46-.73-.348-.282.17-.392.696-.832.618-.056-.044-.034-.146.012-.236.056-.122.168-.236.112-.282-.292.08-.866.248-.866.248-.27.08-.562-.078-.294-.248.126-.044.306-.1.53-.236 0 0 .124-.144-.114-.078a2.288 2.288 0 01-.832.09s-.514-.078-.584-.112c-.056-.044-.122-.214.034-.202.214.012.732-.046 1.126-.134.19-.07.562-.282.764-.372 0 0 .226-.314.36-.382.214-.226.382-.36.562-.596.18-.36.382-.922 1-1.812.282-.404.63-.876 1.068-1.292 0 0 .124-.676.686-1.146a6.53 6.53 0 01.518-.924 3.4 3.4 0 00.212-.336c.182-.26.372-.754 1.036-.822 0 0 .294-.202.394-.348.168-.146.148-.372.282-.518-.214-.212-.732-.618-.766-1.146-.032-.586.168-1.036.53-1.384.392-.37.796-.55 1.292-.516.618.11.732.314.91.516.18.202.26.08.326.292.518.146.496.09.474.472.09.114.212.216.202.428.168-.35.214-.416.686-.798.124-.314.202-.63.302-.956.102-.292.226-.596.306-.82-.08-.652.122-.754.392-1.328-.044-.078-.032-.102-.012-.224.114-.384.272-.866.372-1.192 0 0 .034-.126.17-.126.122-.404.314-1.158.358-1.326.124-.416.058-.574-.02-.82-.024-.08-.012-.18-.058-.272-.134-.246-.28-.584-.382-.82-.056-.146-.158-.708-.158-.708-.01-.124-.01-.18-.01-.18z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>

        <div className="col-12 d-flex justify-content-center  mt-3 mb-3">
          <span className="text-login" style={{ fontSize: 28 }}>
            Enter your username to join us or signin.
          </span>
        </div>

        <div className="col-12 d-flex justify-content-center ">
          <div className="form mobie-form" style={{ width: "40%" }}>
            <div className="w-100">
              <input
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                type="text"
                name=""
                id=""
                placeholder="Username"
              />
              {usernameError && (
                <div className="invalid-feedback">{usernameError}</div>
              )}
            </div>
            <div className="mt-3 w-100">
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                type="password"
                name=""
                id=""
                placeholder="Password"
              />
              {passwordError && (
                <div className="invalid-feedback">{passwordError}</div>
              )}
            </div>

            <div className="mt-3 mb-3">
              <input type="checkbox"/> <label>Remember me</label>
              <span>
                <Link  to ="/forgot-password" className="float-end text-dark fw-bold">
                  Forgot password?
                </Link>
              </span>
            </div>

            <div className="d-flex justify-content-center">
                <span>
                    Don't have an account? <Link to="/register" className="text-dark fw-bold">Register</Link>
                </span>
            </div>



            <span className="text-red">{errorLogin}</span>

            <div className="w-100 mt-3">
              <button
                onClick={handleLogin}
                type="submit"
                className="w-100 btn btn-outline-dark"
              >
                Login
              </button>
            </div>

            <div className="w-100 mt-3">
              <button
                onClick={handleContinueWithGoogle}
                type="submit"
                className="w-100 btn btn-outline-dark"
              >
                <GoogleIcon />
                <span className="mx-2 mt-1 text-responsive">
                  Continue with Google
                </span>
              </button>
            </div>

            <div className="w-100 mt-3">
            <div className="w-100 mt-3">
              <button type="submit" className="w-100 btn btn-outline-dark" onClick={handleContinueWithFacebook}>
                <FacebookIcon />
                <span className="mx-2 mt-1 text-responsive">
                  Continue with Facebook
                </span>
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
