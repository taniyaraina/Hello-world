import styled from 'styled-components'; 

const Section = styled.div`;
 hero-body {
   padding:0 !important;
 }
`;

const Testimonial = () => {
    return (
      <Section>
        <section className="hero is-large is-light">
        <div className="hero-body">
          <div className="heading">
            <h1 className="title has-text-weight-bold is-3 is-spaced has-text-centered has-text-black">Here's what people are saying</h1>
          </div>
          <div className="columns is-centered is-variable is-4 is-multiline ">
            <div className="column is-flex">
              <div className="card is-flex">
                <div className="card-content has-text-centered is-flex">
                  <img className="is-rounded"src="https://divjoy.com/static/images/uploads/pravatar-150x-5.jpeg" />
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."</p>
                  <div className="has-text-weight-bold">Sarah Kline</div>
                  <div className="link is-size-7">Company</div>
                </div>
              </div>
            </div>
            <div className="column is-flex">
              <div className="card is-flex">
                <div className="card-content has-text-centered is-flex">
                <img className="is-rounded"src="https://divjoy.com/static/images/uploads/pravatar-150x-48.jpeg" />
                  <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!"</p>
                  <div className="has-text-weight-bold">Shawna Murray</div>
                  <div className="link is-size-7">Company</div>
                </div>
              </div>
            </div>
            <div className="column is-flex">
              <div className="card is-flex">
                <div className="card-content has-text-centered is-flex">
                <img className="is-rounded"src="https://divjoy.com/static/images/uploads/pravatar-150x-12.jpeg" />
                  <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae."</p>
                  <div className="has-text-weight-bold">Blake Elder</div>
                  <div className="link is-size-7">Company</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Section>
    );
  };
  
  export default Testimonial;