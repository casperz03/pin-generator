function App() {
	const today = new Date();
	today.setMinutes(today.getMinutes() - today.getTimezoneOffset());

	const maxDate = today.toISOString().split("T")[0];

	const PIN = () => {
		const A = Math.random();
		const B = 111;
		return `${A}${B}`;
	};

	console.log(PIN())

	return (
		<>
			<form id="pin-form">
				<div>
					<label htmlFor="name">Imię i nazwisko noworodka:</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="np. Jan"
						minLength={2}
						onKeyDown={e => {
							if (e.key === " ") e.preventDefault();
						}}
						required
					/>
					&nbsp;
					<input
						type="text"
						id="name"
						name="name"
						placeholder="np. Kowalski"
						minLength={2}
						onKeyDown={e => {
							if (e.key === " ") e.preventDefault();
						}}
						required
					/>
				</div>

				<fieldset>
					<legend>Płeć noworodka:</legend>

					<label>
						<input type="radio" name="gender" value="male" required />
						Mężczyzna
					</label>

					<label>
						<input type="radio" name="gender" value="female" required />
						Kobieta
					</label>
				</fieldset>

				<div>
					<label htmlFor="birth-date">Data i godzina narodzin noworodka:</label>
					<input type="date" id="birth-date" name="birthDate" max={maxDate} required />
					&nbsp;
					<input type="time" id="birth-date" name="birthTime" required />
				</div>

				<button
					type="submit"
					onSubmit={e => {
						e.preventDefault();
					}}>
					Generuj PIN
				</button>
			</form>
		</>
	);
}

export default App;
