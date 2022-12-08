import styles from "./Services.module.css";
import Button from "../ButtonSection/Button";
import Link from "next/link";

export default function Services() {
    return (
        <div className={styles.container}>
            <h1>Services</h1>
            <Link href="/">
                <img src="back-arrow.png" alt="back icon" />
            </Link>
            <div className={styles.note}>
                <p>To discuss your requirements, either call us, submit this contact form, or email us at easyedit_teameasy@gmail.com</p>
            </div>
            <div className={styles.name}>
                <label>Name *</label><input required />
                <hr className={styles.hr} />
            </div>
            <div className={styles.email}>
                <label>Email *</label><input required/>
                <hr className={styles.hr1} />
            </div>
            <div className={styles.place}>
                <label>Country/State *</label><input required/>
                <hr className={styles.hr2} />
            </div>
            <div className={styles.number}>
                <label>Phone Number *</label><input required/>
                <hr className={styles.hr3} />
            </div>
            <div className={styles.calltime}>
                <label>Preferred Call Time</label>
                <div className={styles.morning}>
                    <label for="morning">Morning</label>
                    <input type="checkbox" name="call-time" id="morning"/>
                </div>
                <div className={styles.afternoon}>
                    <label for="afternoon">Afternoon</label>
                    <input type="checkbox" name="call-time" id="afternoon" />
                </div>
                <div className={styles.evening}>
                    <label for="evening">Evening</label>
                    <input type="checkbox" name="call-time" id="evening" />
                </div>
            </div>
            <div className={styles.language}>
                <label>Preferred Call Time</label>
                <div className={styles.english}>
                    <label for="english">English</label>
                    <input type="checkbox" name="language" id="english"/>
                </div>
                <div className={styles.tagalog}>
                    <label for="tagalog">Tagalog</label>
                    <input type="checkbox" name="language" id="tagalog" />
                </div>
                <div className={styles.other}>
                    <label for="other">Other</label>
                    <input type="checkbox" name="language" id="other" />
                </div>
                <div className={styles.message}>
                    <label>Message/Requiremsents *</label>
                    <br />
                    <hr />
                </div>
                <div className={styles.submission}>
                    <Button variant="secondary">Remove file<input type="file" /></Button>
                    <p className={styles.subnote}>One file only.</p>
                    <p className={styles.subnote1}>Allowed types: jpeg, jpg, png, mp4</p>
                </div>
                <div className={styles.submit}>
                    <Button variant="secondary" type="submit">INQUIRE NOW</Button>
                </div>
            </div>
        </div>
    )
}