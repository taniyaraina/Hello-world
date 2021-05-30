import styled from 'styled-components';

const Box = styled.div`
img { 
max-width: 100%;
height: auto;
}

`;

const Clients = () => {
    return (
      <Box>
        <section className="hero hero-body is-medium is-light is-relative">
          <div className="is-flex is-justify-content-center">
            <div className="columns is-centered is-multiline is-flex">
              <div className="column pr-5 pl-5 is-centered is-narrow has-text-centered">
                <img src="https://divjoy.com/static/images/uploads/logo-instagram.svg" width="150px" />
              </div>
              <div className="column pr-5 pl-5 is-centered is-narrow">
                <img src="https://divjoy.com/static/images/uploads/logo-slack.svg" width="135px" />
              </div>
              <div className="column pr-5 pl-5 is-centered is-narrow">
                <img src="https://divjoy.com/static/images/uploads/logo-tinder.svg" width="90px" />
              </div>
              <div className="column pr-5 pl-5 is-centered is-narrow">
                <img src="https://divjoy.com/static/images/uploads/logo-spotify.svg" width="135px" />
              </div>
            </div>
          </div>
        </section>
      </Box>
    );
  };
  
  export default Clients;