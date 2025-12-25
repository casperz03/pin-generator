function App() {
	const today = new Date();
	today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
	const maxDate = today.toISOString().split("T")[0];

	return (
		<>
			<form id="pin-form">
				<div>
					<label htmlFor="name">Imię noworodka:</label>
					<input type="text" id="name" name="name" placeholder="np. Jan" required minLength={2} />
				</div>

				<fieldset>
					<legend>Płeć noworodka:</legend>

					<label>
						<input type="radio" name="gender" value="male" required />
						Mężczyzna
					</label>

					<label>
						<input type="radio" name="gender" value="female" />
						Kobieta
					</label>
				</fieldset>

				<div>
					{/* Połączyć birth-date i birth-time */}
					<label htmlFor="birth-date">Data i godzina narodzin noworodka:</label>
					<input type="date" id="birth-date" name="birthDate" min="2025-12-24" max={maxDate} required />
				</div>

				<div>
					<label htmlFor="birth-time">Godzina narodzin noworodka:</label>
					<input type="time" id="birth-time" name="birthTime" required />
				</div>

				<button type="submit">Generuj PIN</button>
			</form>
		</>
	);
}

export default App;
