const Input = ({ type, name, value, lable, onchangehandler, error }) => {
	return (
		<>
			<div className='form-group    mb-3'>
				<label for='exampleInputEmail1'>{lable}</label>

				<input
					onChange={onchangehandler}
					type={type}
					name={name}
					value={value}
					className='form-control btn-outline-success text-black'
					id='exampleInputEmail1'
					placeholder={`Enter${lable.toLowerCase()}`}
				/>

				{error && (
					<div class='alert alert-danger' role='alert'>
						{error}
					</div>
				)}
			</div>
		</>
	);
};

export default Input;
