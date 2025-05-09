export default function Lab1() {
    return (
        <div id="wd-lab1">
            <h2>Lab 1</h2>

            <a href={"https://github.com/leekristen090/kambas-react-web-app/tree/a1"} target={"_blank"}>GitHub Branch a1</a>

            <h3>HTML Examples</h3>
            <div id={"wd-h-tag"}>
                <h4>Heading Tags</h4>
                Text documents are often broken up into several sections and subsections. Each section is usually prefaced with a short title or heading that attempts to summarize the topic of the section it precedes. For instance this paragraph is preceded by the heading Heading Tags. The font of the section headings are usually larger and bolder than their subsection headings. This document uses headings to introduce topics such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used to format plain text so that it renders in a browser as large headings. There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest heading.
            </div>

            <div id={"wd-p-tag"}>
                <h4>Paragraph Tags</h4>
                <p id={"wd-p-1"}>
                    This is a paragraph. We often separate a long set of sentences with vertical spaces to make the text easier to read. Browsers ignore vertical white spaces and render all the text as one single set of sentences. To force the browser to add vertical spacing, wrap the paragraphs you want to separate with the paragraph tag
                </p>
                <p id={"wd-p-2"}>
                    This is the first paragraph. The paragraph tag is used to format vertical gaps between long pieces of text like this one.
                </p>
                <p id={"wd-p-2"}>
                    This is the second paragraph. Even though there is a deliberate white gap between the paragraph above and this paragraph, by default browsers render them as one contiguous piece of text as shown here on the right.
                </p>
                <p id={"wd-p-3"}>
                    This is the third paragraph. Wrap each paragraph with the paragraph tag to tell browsers to render the gaps.
                </p>

            </div>

            <div id={"wd-lists"}>
                <h4>List Tags</h4>
                <h5>Ordered Lists</h5>
                How to make pancakes:
                <ol id={"wd-pancakes"}>
                    <li>Mix dry ingredients</li>
                    <li>Add wet ingredients</li>
                    <li>Stir to combine</li>
                    <li>Heat a skillet or griddle</li>
                    <li>Pour batter onto the skillet</li>
                    <li>Cook until bubbly on top</li>
                    <li>Flip and cook the other side</li>
                    <li>Serve and enjoy!</li>
                </ol>
                My favorite recipe:
                <ol id={"wd-my-recipe"}>
                    <li>In skillet over medium heat, saute mined garlic and Ditalini pasta, coat pasta in oil</li>
                    <li>Pour chicken broth over pasta</li>
                    <li>Bring to boil then let simmer until most of the broth has evaporated</li>
                    <li>Pour heavy whipping cream over pasta and mix</li>
                    <li>Once most of the liquid has evaporated, take off heat</li>
                    <li>Add butter and parmesan</li>
                    <li>Season to taste with pepper and parsley</li>
                </ol>

                <h5>Unordered Lists</h5>
                My favorite books (in no particular order)
                <ul id={"wd-my-books"}>
                    <li>Dune</li>
                    <li>Lord of the Rings</li>
                    <li>Ender's Game</li>
                    <li>Red Mars</li>
                    <li>The Forever War</li>
                </ul>
                Your favorite books (in no particular order)
                <ul id={"wd-your-books"}>
                    <li>H2O</li>
                    <li>Where the Crawdads Sing</li>
                    <li>Tiny Beautiful Things</li>
                    <li>Animal Farm</li>
                </ul>
            </div>

            <div id={"wd-tables"}>
                <h4>Table Tag</h4>

                <table border={1} width={"100%"}> {/*Declares the table*/}
                    <thead> {/*Declares the table heading section*/}
                        <tr> {/*Declares the heading row*/}
                            <th>Quiz</th> {/*Declares the heading for first col*/}
                            <th>Topic</th> {/*Declares the heading for second col*/}
                            <th>Date</th> {/*Declares the heading for third col*/}
                            <th>Grade</th> {/*Declares the heading for fourth col*/}
                        </tr>
                    </thead>
                    <tbody> {/*Declares the table's main content*/}
                        <tr> {/*Declares the first row*/}
                            <td>Q1</td> {/*Declares the first row, first col*/}
                            <td>HTML</td> {/*Declares the first row, second col*/}
                            <td>02/03/21</td> {/*Declares the first row, third col*/}
                            <td>85</td> {/*Declares the first row, fourth col*/}
                        </tr>
                        <tr>
                            <td>Q2</td>
                            <td>CSS</td>
                            <td>02/10/21</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Q3</td>
                            <td>JavaScript</td>
                            <td>02/17/21</td>
                            <td>95</td>
                        </tr>
                        <tr>
                            <td>Q4</td>
                            <td>Ordered Lists</td>
                            <td>02/20/21</td>
                            <td>89</td>
                        </tr>
                        <tr>
                            <td>Q5</td>
                            <td>Make Pancakes</td>
                            <td>03/05/21</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Q6</td>
                            <td>Favorite Books</td>
                            <td>03/11/21</td>
                            <td>98</td>
                        </tr>
                        <tr>
                            <td>Q7</td>
                            <td>Solar System-The Planets</td>
                            <td>03/16/21</td>
                            <td>77</td>
                        </tr>
                        <tr>
                            <td>Q8</td>
                            <td>Elementary Data Structures</td>
                            <td>03/25/21</td>
                            <td>91</td>
                        </tr>
                        <tr>
                            <td>Q9</td>
                            <td>Top 10 Ice Cream Flavors in the USA</td>
                            <td>04/12/21</td>
                            <td>86</td>
                        </tr>
                        <tr>
                            <td>Q10</td>
                            <td>Most Disliked Action Movie Characters</td>
                            <td>04/24/21</td>
                            <td>80</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}>Average</td>
                            <td>89.1</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <div id={"wd-images"}>
                <h4>Image Tags</h4>
                Loading an image from the internet: <br/>
                <img id="wd-starship" width="400px" src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"  alt={"Tesla Bot"}/>
                <br />
                Loading a local image:<br/>
                <img id={"wd-starship"} src={"../images/teslabot.jpg"} width={"200px"} alt={"Tesla Bot"}/>

            </div>

            <div id={"wd-forms"}>
                <h4>Form Elements</h4>
                <form id={"wd-text-fields"}>
                    <h5>Text Fields</h5>
                    <label htmlFor={"wd-text-field-username"}>Username:</label>
                    <input placeholder={"jdoe"} id={"wd-text-field-username"}/> <br/>
                    <label htmlFor={"wd-text-fields-password"}>Password:</label>
                    <input type={"password"} value={"123@#$asd"} id={"wd-text-fields-password"}/> <br/>
                    <label htmlFor={"wd-text-field-first-name"}>First Name:</label>
                    <input type={"text"} title={"John"} id={"wd-text-field-first-name"}/> <br/>
                    <label htmlFor={"wd-text-field-last-name"}>Last Name:</label>
                    <input type={"text"} placeholder={"Doe"} value={"Wonderland"}
                           title={"The last name"} id={"wd-text-field-last-name"}/>
                </form>
            </div>

            <h5>Text Boxes</h5>
            <label>Biography</label> <br/>
            <textarea id={"wd-textarea"} cols={30} rows={10}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolorum eaque hic in itaque molestias praesentium quod repellendus sint ullam. Adipisci aliquam corporis culpa debitis error iure nemo officiis quas.
            </textarea>

            <h5 id={"wd-buttons"}>Buttons</h5>
            <button id={"wd-all-good"}
                    onClick={()=> alert("Life is Good!")}
                    type={"button"}>Hello World!</button>

            <h5>File Upload</h5>
            <input id={"wd-upload"} type={"file"}/>

            <h5 id={"wd-radio-buttons"}>Radio Buttons</h5>
            <label>Favorite movie genre:</label><br/>
            <input type={"radio"} name={"radio-genre"} id={"wd-radio-comedy"}/>
            <label htmlFor={"wd-radio-comedy"}>Comedy</label><br/>
            <input type={"radio"} name={"radio-genre"} id={"wd-radio-drama"}/>
            <label htmlFor={"wd-radio-drama"}>Drama</label><br/>
            <input type={"radio"} name={"radio-genre"} id={"wd-radio-scifi"}/>
            <label htmlFor={"wd-radio-scifi"}>Science Fiction</label><br/>
            <input type={"radio"} name={"radio-genre"} id={"wd-radio-fantasy"}/>
            <label htmlFor={"wd-radio-fantasy"}>Fantasy</label>

            <h5 id={"wd-checkboxes"}>Checkboxes</h5>
            <label>Favorite movie genre:</label><br/>
            <input type={"checkbox"} name={"check-genre"} id={"wd-chkbox-comedy"}/>
            <label htmlFor={"wd-chkbox-comedy"}>Comedy</label><br/>
            <input type={"checkbox"} name={"check-genre"} id={"wd-chkbox-drama"}/>
            <label htmlFor={"wd-chkbox-drama"}>Drama</label><br/>
            <input type={"checkbox"} name={"check-genre"} id={"wd-chkbox-scifi"}/>
            <label htmlFor={"wd-chkbox-scifi"}>Science Fiction</label><br/>
            <label htmlFor={"wd-chkbox-fantasy"}>
                <input type={"checkbox"} name={"check-genre"} id={"wd-chkbox-fantasy"}/>
                Fantasy
            </label>

            <h4 id={"wd-dropdowns"}>Dropdowns</h4>
            <h5>Select One</h5>
            <label htmlFor={"wd-select-one-genre"}>Favorite movie genre:</label><br/>
            <select id={"wd-select-one-genre"}>
                <option value={"COMEDY"}>Comedy</option>
                <option value={"DRAMA"}>Drama</option>
                <option selected value={"SCIFI"}>Science Fiction</option>
                <option value={"FANTASY"}>Fantasy</option>
            </select>

            <h5>Select Many</h5>
            <label htmlFor={"wd-select-many-genre"}>Favorite movie genres:</label><br/>
            <select multiple id={"wd-select-many-genre"} >
                <option selected value={"COMEDY"}>Comedy</option>
                <option value={"DRAMA"}>Drama</option>
                <option selected value={"SCIFI"}>Science Fiction</option>
                <option value={"FANTASY"}>Fantasy</option>
            </select>

            <h4>Other HTML field types</h4>
            <label htmlFor={"wd-text-fields-email"}>Email: </label>
            <input type={"email"} placeholder={"jdoe@somewhere.com"} id={"wd-text-fields-email"}/><br/>
            <label htmlFor={"wd-text-fields-salary-start"}>Starting Salary: </label>
            <input type={"number"}
                   id={"wd-text-fields-salary-start"}
                   placeholder={"1000"}
                   value={"100000"}/> <br/>
            <label htmlFor={"wd-text-fields-rating"}>Rating: </label>
            <input type={"range"}
                   id={"wd-text-fields-rating"}
                   placeholder={"Doe"}
                   max={"5"}
                   value={"4"}/> <br/>
            <label htmlFor={"wd-text-fields-dob"}>Date of Birth: </label>
            <input type={"date"} id={"wd-text-fields-dob"} placeholder={"2000-01-21"}/> <br/>

            <h4>Anchor Tag</h4>
            Please
            <a href={"https://www.lipsum.com"} id={"wd-lipsum"} target={"_blank"}> click here </a>
            to get dummy text.<br/>

        </div>
    );
}