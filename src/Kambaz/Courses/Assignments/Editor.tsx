export default function AssignmentEditor() {
    return (
        <div id={"wd-assignments-editor"}>
            <label htmlFor={"wd-name"}>Assignment Name</label>
            <input id={"wd-name"} value={"A1 - ENV + HTML"} /> <br/><br/>
            <textarea id={"wd-description"}>
                This assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kmabaz application Links to all relevant source code repos The Kambaz application should include a link to navigate back to the landing page.
            </textarea>
            <br/>
            <table>
                <tr>
                    <td align={"right"} valign={"top"}>
                        <label htmlFor={"wd-points"}>Points</label>
                    </td>
                    <td>
                        <input id={"wd-points"} value={100} />
                    </td>
                </tr>

                <tr>
                    <td align={"right"} valign={"top"}>
                        <label htmlFor={"wd-group"}>Assignment Group</label><br/>
                    </td>
                    <td>
                        <select id={"wd-group"}>
                            <option selected value={"ASSIGNMENTS"} id={"wd-group-assignments"}>ASSIGNMENTS</option>
                            <option value={"QUIZZES"} id={"wd-group-quizzes"}>QUIZZES</option>
                            <option value={"EXAMS"} id={"wd-group-exams"}>EXAMS</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align={"right"} valign={"top"}>
                        <label htmlFor={"wd-display-grade-as"}>Display Grade As </label>
                    </td>
                    <td>
                        <select id={"wd-display-grade-as"}>
                            <option selected value={"PERCENTAGE"} id={"wd-display-grade-as-percentage"}>Percentage</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align={"right"} valign={"top"}>
                        <label htmlFor={"wd-submission-type"}>Submission Type</label>
                    </td>
                    <td>
                        <select id={"wd-submission-type-select"}>
                            <option selected value={"ONLINE"} id={"wd-submission-type-select-online"}>Online</option>
                            <option value={"INPERSON"} id={"wd-submission-type-select-in-person"}>In Person</option>
                        </select>
                        <br/><br/>
                        Online Entry Options<br/>
                        <input type={"checkbox"} id={"wd-text-entry"} name={"chkbox-text-entry"}/>
                        <label htmlFor={"wd-text-entry"}>Text Entry</label><br/>
                        <input type={"checkbox"} id={"wd-website-url"} name={"chkbox-website-url"}/>
                        <label htmlFor={"wd-website-url"}>Website Url</label><br/>
                        <input type={"checkbox"} id={"wd-media-recordings"} name={"chkbox-media-recordings"} />
                        <label htmlFor={"wd-media-recordings"}>Media Recordings</label><br/>
                        <input type={"checkbox"} id={"wd-student-annotation"} name={"chkbox-student-annotation"}/>
                        <label htmlFor={"wd-student-annotation"}>Student Annotation</label><br/>
                        <input type={"checkbox"} id={"wd-file-upload"} name={"chkbox-file-upload"} />
                        <label htmlFor={"wd-file-upload"}>File Upload</label>
                    </td>
                </tr>
                <tr>
                    <td align={"right"} valign={"top"}>
                        <br/><label htmlFor={"wd-assign-to"}>Assign To</label>
                    </td>
                    <td>
                        <br/><input id={"wd-assign-to"} value={"Everyone"}/>
                    </td>
                </tr>
                <tr>
                    <td align={"right"} valign={"top"}>
                        <label htmlFor={"wd-due-date"}>Due </label>
                    </td>
                    <td>
                        <input type={"date"} id={"wd-due-date"} placeholder={"2024-05-13"}/>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td align={"left"} valign={"top"}>
                        <br/><label htmlFor={"wd-available-from"}> Available from</label>
                    </td>
                    <td align={"left"} valign={"top"}>
                        <br/><label htmlFor={"wd-available-until"}>Until</label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td align={"left"}>
                        <input type={"date"} id={"wd-available-from"} />
                    </td>
                    <td align={"left"}>
                        <input type={"date"} id={"wd-available-until"} />
                    </td>
                </tr>
            </table>
            <hr/>
            <table>
                <tr>
                    <td align={"right"}>
                        <button>Cancel</button>
                        <button>Save</button>
                    </td>
                </tr>
            </table>
        </div>
    );
}