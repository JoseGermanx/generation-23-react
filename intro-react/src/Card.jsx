

function Card({user}) {

    return (
        <div className="card" style="width: 18rem;">
          <div className="card-body">
           <h5 className="card-title">${user.name}</h5>
           <h6 className="card-subtitle mb-2 text-muted">${user.email}</h6>
           <p className="card-text">${user.company.catchPhrase}</p>
           <a href="#" className="card-link">${user.phone}</a>
           <a href="#" className="card-link">${user.company.name}</a>
          </div>
        </div>
    )
}

export default Card