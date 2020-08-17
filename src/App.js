import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
        <br />
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
          <label class="form-check-label" for="inlineRadio1">
            1
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
          <label class="form-check-label" for="inlineRadio2">
            2
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio3"
            value="option3"
            disabled
          />
          <label class="form-check-label" for="inlineRadio3">
            3 (disabled)
          </label>
        </div>
        <br />
        <select class="form-control form-control-lg">
          <option>Large select</option>
        </select>
        <select class="form-control">
          <option>Default select</option>
        </select>
        <select class="form-control form-control-sm">
          <option>Small select</option>
        </select>
        <br />
        <form>
          <div class="form-row align-items-center">
            <div class="col-auto my-1">
              <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">
                Preference
              </label>
              <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col-auto my-1">
              <div class="custom-control custom-checkbox mr-sm-2">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customControlAutosizing"
                />
                <label
                  class="custom-control-label"
                  for="customControlAutosizing"
                >
                  Remember my preference
                </label>
              </div>
            </div>
            <div class="col-auto my-1">
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
        <form>
          <fieldset disabled>
            <div class="form-group">
              <label for="disabledTextInput">Disabled input</label>
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                placeholder="Disabled input"
              />
            </div>
            <div class="form-group">
              <label for="disabledSelect">Disabled select menu</label>
              <select id="disabledSelect" class="form-control">
                <option>Disabled select</option>
              </select>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="disabledFieldsetCheck"
                  disabled
                />
                <label class="form-check-label" for="disabledFieldsetCheck">
                  Can't check this
                </label>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </fieldset>
        </form>
        <div class="custom-control custom-switch">
          <input
            type="checkbox"
            class="custom-control-input"
            id="customSwitch1"
          />
          <label class="custom-control-label" for="customSwitch1">
            Toggle this switch element
          </label>
        </div>
        <div class="custom-control custom-switch">
          <input
            type="checkbox"
            class="custom-control-input"
            disabled
            id="customSwitch2"
          />
          <label class="custom-control-label" for="customSwitch2">
            Disabled switch element
          </label>
        </div>
      </div>
    );
  }
}

export default App;
