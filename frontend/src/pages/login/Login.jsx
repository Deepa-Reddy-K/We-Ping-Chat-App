import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className='flex flex-col items-center justify-center min-h-screen p-4'>
			{/* Frosted Glass Effect Container */}
			<div className='w-full max-w-md p-6 bg-pink-400 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-500'>
				<h1 className='text-3xl font-semibold text-center text-white mb-4'>
					Login to 
					<span className='text-yellow-600'> We-Ping </span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Username</span>
						</label>
						<input
							type='text'
							placeholder='Enter your Username'
							className='w-full input input-bordered h-10'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter your Password'
							className='w-full input input-bordered h-10'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<Link to='/signup' className='text-sm text-center block mt-2 hover:underline hover:text-yellow-600'>
						{"Don't"} have an account?
					</Link>

					<div className='mt-4'>
						<button className='btn btn-block btn-sm border border-slate-700 bg-yellow-500 hover:bg-yellow-600 text-slate-700' disabled={loading}>
							{loading ? <span className='loading loading-spinner '></span> : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Login;
