function SearchBar({ handleEnter, handleChange }) {
	return (
		<form
			className="form mb-2 mt-2"
			action="#"
			onSubmit={(event) => event.preventDefault()}
		>
			<button>
				<i className="fa-solid fa-magnifying-glass"></i>
			</button>
			<input
				className="input"
				placeholder="Search music."
				required
				type="text"
				onKeyUp={handleEnter}
				onChange={handleChange}
			/>
			<button className="reset" type="reset">
				<i className="fa-solid fa-x"></i>
			</button>
		</form>
	);
}

export default SearchBar;
