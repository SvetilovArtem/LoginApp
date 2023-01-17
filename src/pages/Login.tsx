import Button from '../components/Button/Button'
import GoogleButton from '../components/Button/GoogleButton'
import SvgIconCreator from '../icons/SvgIconCreator'

const Login = () => {

  return (
    <div className='flex flex-col justify-center items-center max-w-61 mt-56 mb-56 mx-auto font-inter login'>
        <h1 className='text-5xl'>Login App</h1>
        <a href="https://github.com/SvetilovArtem" className='mb-16 underline text-blue-700'>by SvetilovArtem</a>
        <GoogleButton />
        <a href='https://github.com/SvetilovArtem/LoginApp' className="absolute top-3 right-6">
          <SvgIconCreator type='github' />
        </a>
    </div>
  )
}

export default Login