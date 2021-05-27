import styled from 'styled-components';



const Clients = () => {
    return (
      <section className="client is-small is-light">
        <div className="hero-body">
          <div className="columns is-centered is-multiline">
            <div className="column is-centered is-narrow">
                <img src="https://divjoy.com/static/images/uploads/logo-instagram.svg" />
            </div>
            <div className="column is-centered is-narrow">
                <img src="https://divjoy.com/static/images/uploads/logo-slack.svg" />
            </div>
            <div className="column is-centered is-narrow">
                <img src="https://divjoy.com/static/images/uploads/logo-tinder.svg" />
            </div>
            <div className="column is-centered is-narrow">
                <img src="https://divjoy.com/static/images/uploads/logo-spotify.svg" />
            </div>
          </div>
       </div>
      </section>
    );
  };
  
  export default Clients;