import React, { useState } from 'react';

const CongresSearchBox = () => {
  const [userInput, setUserInput] = useState('');
  return (
    <div>
      <p>
        <form
          method="get"
          target="_top"
          role="search"
          action=" https://congress.gov/search"
        >
          <div id="search-wrapper" class="search_wrapper">
            <div class="search_formats">
              <select id="search-format" name="search-source">
                <optgroup label="Search by Congress">
                  <option value="current-congress">Current Congress</option>
                  <option value="all-congresses">All Congresses</option>
                </optgroup>
                <optgroup label="Search by Source">
                  <option value="legislation">Legislation</option>
                  <option value="committee-materials">
                    Committee Materials
                  </option>
                  <option value="congrecord">Congressional Record</option>
                  <option value="members">Members</option>
                  <option value="nominations">Nominations</option>
                </optgroup>
              </select>
              <input
                id="search"
                type="text"
                class="locsuggest"
                name="q"
                placeholder="Enter State and District Number"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              ></input>
              <button class="search_submit" id="search-submit" type="submit">
                GO
              </button>
            </div>
          </div>
        </form>{' '}
      </p>
    </div>
  );
};

export default CongresSearchBox;
