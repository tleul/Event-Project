const Input = ({ type, name, value, lable, onchangehandler }) => {
	return (
		<>
			<div className='form-group    mb-3'>
				<label for='exampleInputEmail1'>{lable}</label>
				<input
					onChange={onchangehandler}
					type={name === 'active' ? 'boolean' : type}
					name={name}
					value={value}
					className='form-control btn-outline-success text-black'
					id='exampleInputEmail1'
					placeholder={`Enter${lable.toLowerCase()}`}
				/>
			</div>
		</>
	);
};

export default Input;
