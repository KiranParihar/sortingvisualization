import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const SortInfo = ({
  title,
  description,
  worstCase,
  avgCase,
  bestCase,
  space
}) => {
  return (
    <div className="SortInfo">
      <hr />
      <h1>{title ? title : 'Select Algorithm'}</h1>

      <div className="SortInfo__Body">
        <article className="SortInfo__Article">
          {description ? (
            description
          ) : (
            <p>
              You have not selected any Algorithm for Visualization
              <ul >
              <h4>Follow below Steps to Select Algorithm and Start the Visualizations</h4>
                <li>Select the Algorithm you want to see the Visualization of from the Drop down menu present in the Navbar named as SELECT SORT ALGORITHM</li>
                <li>Select the Size of the array between 5 to 100 from the drop down menu present in the Navbar named as SIZE</li>
                <li>Click on the Randomize button present in the Navbar to randomize the array</li>
                <li>Now, Click the Play Button present below the Bar graph to start the Visualization the specified array</li>
              </ul>
            </p>
          )}
        </article>

        <aside className="SortInfo__Aside">
          <h3>Performance</h3>
          <table>
            <tbody>
              <tr>
                <td>Worst-case space complexity</td>
                <td>
                  <code>{space}</code>
                </td>
              </tr>

              <tr>
                <td>Best-case time complexity</td>
                <td>
                  <code>{bestCase}</code>
                </td>
              </tr>
              

              <tr>
                <td>Average time complexity</td>
                <td>
                  <code>{avgCase}</code>
                </td>
              </tr>

              <tr>
                <td>Worst-case time complexity</td>
                <td>
                  <code>{worstCase}</code>
                </td>
              </tr>
              

            </tbody>
          </table>
        </aside>
      </div>
    </div>
  );
};

SortInfo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.object,
  worstCase: PropTypes.object,
  avgCase: PropTypes.object,
  bestCase: PropTypes.object,
  space: PropTypes.object
};

export default SortInfo;
