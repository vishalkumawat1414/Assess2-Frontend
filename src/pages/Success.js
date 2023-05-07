import React from 'react'
import { Link } from 'react-router-dom';

function Success({res}) {
  return (
		<div>
			<div className=' flex items-center justify-center h-100vh w-auto flex-col'>
				<h1>Thank you for submitting your application!</h1>
				{res}
				<p>
					We have received your information and will review your resume shortly.
					We will let you know if we have any questions or concerns.
				</p>
                <p>
					Click here-{'>'} <Link to='/'className='text-blue-500'>Login</Link>
				</p>
			</div>
			
		</div>
	);
}

export default Success