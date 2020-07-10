import React from 'react';

function App() {
  return (
    <>
      <header>
        <h1>Amplify Meetup</h1>
      </header>
      <main>
        <article>
          <aside>
            <form action="">
              <fieldset>
                <h3>New Meetup</h3>
                <label for="">Community Name</label>
                <input type="text" />
                <label for="">Title</label>
                <input type="" />
                <button>💾 Create</button>
              </fieldset>
            </form>
          </aside>
          <section>
            <fieldset>
              <h3>AWS Meetup</h3>
              <div className="event">
                <div className="dates">
                  <span className="date">19</span>
                  <span className="month">Juli</span>
                  <span className="year">2020</span>
                </div>
                <div className="event-detail">
                  <h4>AWSome Amplify</h4>
                  <div className="location">📍 Jakarta</div>
                </div>
                <div className="cta">
                  <a href="#">
                    <button>👀 Detail</button>
                  </a>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <h3>JakartaJS</h3>
              <div className="event">
                <div className="dates">
                  <span className="date">19</span>
                  <span className="month">Agustus</span>
                  <span className="year">2020</span>
                </div>
                <div className="event-detail">
                  <h4>Build Something Awesome with JavaScript</h4>
                  <div className="location">📍 Jakarta</div>
                </div>
                <div className="cta">
                  <a href="#">
                    <button>👀 Detail</button>
                  </a>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <h3>DevC Jakarta</h3>
              <div className="event">
                <div className="dates">
                  <span className="date">19</span>
                  <span className="month">September</span>
                  <span className="year">2020</span>
                </div>
                <div className="event-detail">
                  <h4>React All the Thing!</h4>
                  <div className="location">📍 Jakarta</div>
                </div>
                <div className="cta">
                  <a href="#">
                    <button>👀 Detail</button>
                  </a>
                </div>
              </div>
            </fieldset>
          </section>
        </article>
      </main>
    </>
  );
}

export default App;
