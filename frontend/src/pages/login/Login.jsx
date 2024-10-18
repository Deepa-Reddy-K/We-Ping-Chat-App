import React from 'react';

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      {/* Frosted Glass Effect Container */}
      <div className='w-full p-6 bg-pink-400 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-500'>
        <h1 className='text-3xl font-semibold text-center text-white mb-4 font-fun'>
          Welcome to 
          <span className='text-yellow-500'> We-Ping </span>
        </h1>
        <form>
 					<div>
 						<label className='label p-2'>
 							<span className='text-base label-text'>Username</span>
 						</label>
 						<input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
 					</div>

 					<div>
 						<label className='label'>
 							<span className='text-base label-text'>Password</span>
 						</label>
 						<input
 							type='password'
 							placeholder='Enter Password'
 							className='w-full input input-bordered h-10'
 						/>
 					</div>
 					<a href='#' className='text-sm  hover:underline hover:text-yellow-500 mt-2 inline-block'>
 						{"Don't"} have an account?
 					</a>

 					<div>
 						<button className='btn btn-block btn-sm mt-2'>Login</button>
 					</div>
 				</form>
         </div>
    </div>
  );
};

export default Login;



// STARTER CODE FOR THIS FILE
// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-h-screen'>
//       {/* Frosted Glass Effect Container */}
//       <div className='w-full max-w-md p-6 bg-pink-400 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-500'>
//         <h1 className='text-3xl font-semibold text-center text-white mb-4 font-fun'>
//           Welcome to 
//           <span className='text-yellow-500'> We-Ping </span>
//         </h1>
//         <form>
//  					<div>
//  						<label className='label p-2'>
//  							<span className='text-base label-text'>Username</span>
//  						</label>
//  						<input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
//  					</div>

//  					<div>
//  						<label className='label'>
//  							<span className='text-base label-text'>Password</span>
//  						</label>
//  						<input
//  							type='password'
//  							placeholder='Enter Password'
//  							className='w-full input input-bordered h-10'
//  						/>
//  					</div>
//  					<a href='#' className='text-sm  hover:underline hover:text-yellow-500 mt-2 inline-block'>
//  						{"Don't"} have an account?
//  					</a>

//  					<div>
//  						<button className='btn btn-block btn-sm mt-2'>Login</button>
//  					</div>
//  				</form>
//          </div>
//     </div>
//   );
// };

// export default Login;
