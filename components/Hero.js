import styled from 'styled-components';

const Box = styled.div`
  h1{
   max-width:80%;
  }
  
`;

const Hero = () => {
  return (
    <Box>
      <section className="hero is-small">
        <div className="hero-body is-flex page pt-6 pb-6 is-flex-direction-row is-justify-content-space-between">
          <div className="pl-5 pr-5">
            <h1 className="title is-spaced is-1 has-text-weight-bold is-size-2-mobile has-text-black ">Your landing page title here</h1>
            <p className=" is-size-5 pb-5">This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan.</p>
            <div className="pt-4">
              <a className="button is-primary is-medium">
                <strong className="has-text-weight-normal">Get Started</strong>
              </a>
            </div>
          </div>
          <p className="pl-5 pr-5"><img src="https://divjoy.com/static/images/uploads/undraw-japan_ubgk.svg" /></p>
        </div>
      </section>
    </Box>
  );
};

export default Hero;
