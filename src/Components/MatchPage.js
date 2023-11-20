

function MatchPage({ cars }) {
    return (
      <div>
        <h1>Car Filter and Match</h1>
        {/* Filter form can be static for now */}
        <section>
          {/* Form content */}
        </section>
        <section>
          <h2>Matching Cars</h2>
          <ul>
            {cars.map(car => (
              <li key={car.id}>{car.make} - {car.model} - {car.year}</li>
            ))}
          </ul>
        </section>
        {/* Other static content */}
      </div>
    );
  }
  