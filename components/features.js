import styled from 'styled-components';

const Section = styled.div`
 
.padding {
  padding-top: 100px !important;
  padding-bottom: 100px !important;
} 
.container {
   max-width:90%;
 }
 .test {
   max-width:76%;
 }
 img {
   max-width:300px;
   height: auto;
 }
 .image {
  text-align: -webkit-center;
 }
 .paragraph {
   max-width:85%;
 }
`;

const Features = () => {
    return (
      <Section>
        <section className="hero is-large is-white">
          <div className="padding hero-body">
          <div className="container is-flex is-flex-direction-column is-align-content-center">
              <div className="pb-6">
                <div className="has-text-centered is-flex is-flex-direction-column is-align-items-center">
                  <h3 className="has-text-weight-bold is-3 title is-spaced">Features</h3>
                  <p className="test subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                </div>
              </div> 
              <div className="is-flex is-flex-direction-column pt-6">
                <div className="columns pt-6 pb-6">
                  <div className="column is-half">
                    <h3 className="has-text-weight-bold is-3 title is-spaced">Explore</h3>
                    <p className="paragraph subtitle">Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.</p>
                  </div>
                  <div className="column image">
                  <img src="https://divjoy.com/static/images/uploads/undraw-mind_map_cwng.svg"/>
                  </div>
                </div>
                <div className="columns pt-5 pb-5">
                  <div className="image column">
                  <img src="https://divjoy.com/static/images/uploads/undraw-personal_settings_kihd.svg" />
                  </div>
                  <div className="column">
                    <h3 className="has-text-weight-bold is-3 title is-spaced">Explore</h3>
                    <p className="paragraph subtitle">Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.</p>
                  </div>
                </div>
                <div className="columns pt-6 pb-6">
                  <div className="column">
                    <h3 className="has-text-weight-bold is-3 title is-spaced">Explore</h3>
                    <p className="paragraph subtitle">Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.</p>
                  </div>
                  <div className="image column">
                    <img src="https://divjoy.com/static/images/uploads/undraw-having_fun_iais.svg" />
                  </div>
                </div>
                <div className="columns pt-5 pb-5">
                  <div className="image column is-half">
                    <img src="https://divjoy.com/static/images/uploads/undraw-balloons_vxx5.svg" />
                  </div>
                  <div className="column">
                    <h3 className="has-text-weight-bold is-3 title is-spaced">Explore</h3>
                    <p className="paragraph subtitle">Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </Section>
    );
  };
  
  export default Features;