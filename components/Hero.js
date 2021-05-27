import styled from 'styled-components';

const Box = styled.div`
  img {
    max-height: 100%;
  }
`;

const Hero = () => {
  return (
    <Box>
      <section className="hero is-large">
        <div className="hero-body is-flex">
          <div>
            <h1 className="title is-spaced has-text-weight-bold is-size-2-mobile has-text-black ">Your landing page title here</h1>
            <p className=" is-size-5">This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan.</p>
          </div>
          <p className=""><img src="https://divjoy.com/static/images/uploads/undraw-japan_ubgk.svg" /></p>
        </div>
      </section>
    </Box>
  );
};

export default Hero;
