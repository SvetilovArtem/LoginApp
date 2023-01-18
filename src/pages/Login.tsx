import { getRedirectResult, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import GoogleButton from '../components/Button/GoogleButton'
import { auth, provider } from '../firebaseConfig/firebase';
import SvgIconCreator from '../icons/SvgIconCreator'
import { setIsAuth } from '../redux/userSlice';

const Login = () => {

  const dispatch = useDispatch()

  const loginHandler = () => {
    signInWithRedirect(auth, provider)
    console.log(auth)
    getRedirectResult(auth)
    .then((result:any) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if(credential) {
        const token = credential.accessToken
        const user = result.user
        dispatch(setIsAuth(token ? true : false))
      }
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
  }

  return (
    <div className='flex flex-col justify-center items-center max-w-61 mt-56 mb-56 mx-auto font-inter login'>
        <h1 className='text-5xl'>Login App</h1>
        <a href="https://github.com/SvetilovArtem" className='mb-16 underline text-blue-700'>by SvetilovArtem</a>
        <GoogleButton onClickHandler={() => loginHandler()} />
        <a href='https://github.com/SvetilovArtem/LoginApp' className="absolute top-3 right-6">
          <SvgIconCreator type='github' />
        </a>
    </div>
  )
}

export default Login