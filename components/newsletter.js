import styled from 'styled-components';

const Section = styled.div`;
 .container {
   max-width:90%;
 }
 .hero {
   padding-top: 60px;
   padding-bottom: 60px;
 }
 .input {
   padding-right:95px !important;
 }
`;

const Newsletter = () => {
    return (
      <Section>
        <section className="hero is-small is-white">
        <div className="hero-body is-flex is-justify-content-center">
          <div className="container is-flex is-justify-content-space-between">
            <div>
              <h3 className="title has-text-weight-bold is-spaced has-text-black">Stay in the know</h3>
              <p className="subtitle">Receive our latest articles and feature updates</p>
            </div>
            <div className="is-align-self-center">
              <div className="field is-grouped">
                <p className="paragraph control is-expanded control-radius-small">
                   <input className="input pl-3 pr-6 is-size-5 has-text-left" type="text" placeholder="Enter your email"></input>
                </p>
                <p className="paragraph-1 control control-radius-small">
                  <a className="button is-primary pl-4 pr-4 is-size-5 has-text-centered"> 
                    Subscribe
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Section>
    );
  };
  
  export default Newsletter;