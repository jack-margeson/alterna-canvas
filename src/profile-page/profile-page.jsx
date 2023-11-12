import "./profile-page.scss";
import NativeSelect from '@mui/material/NativeSelect';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

function ProfilePage({ childToParent }) {
    childToParent("Classes");

    const userAlex = () => {
        document.getElementById("profile-avatar").textContent = "AY"
        document.getElementById("points").textContent = "2021"
    }
    const userKody = () => {
        document.getElementById("profile-avatar").textContent = "KP"
        document.getElementById("points").textContent = "2400"

    }
    const userJack = () => {
        document.getElementById("profile-avatar").textContent = "JM"

        document.getElementById("points").textContent = "2373"
    }
    const userAl = () => {
        document.getElementById("profile-avatar").textContent = "AA"

        document.getElementById("points").textContent = "2000"
    }
    return (
        <div>
            <FormControl style={{
                width: "90%",
                margin: "10px",
                color: "#dedbd6",
            }}
                sx={{ color: "#dedbd6" }}>
                <InputLabel variant="standard" sx={{ color: "#dedbd6" }}>
                    User
                </InputLabel>
                <NativeSelect
                    id="user"
                    defaultValue={"Alex Yang"}
                    style={{ color: "#dedbd6" }}
                    color="primary"
                    onChange={(event) => {
                        const selectedValue = event.target.value;
                        if (selectedValue === "Alex Yang") {
                            userAlex();
                        } else if (selectedValue === "Kody Penn") {
                            userKody();
                        } else if (selectedValue === "Jack Margeson") {
                            userJack();
                        } else if (selectedValue === "Al Ayoola") {
                            userAl();
                        }
                    }}>
                    <option value={"Alex Yang"} style={{ color: "#181a1b" }}>Alex Yang</option>
                    <option value={"Kody Penn"} style={{ color: "#181a1b" }}>Kody Penn</option>
                    <option value={"Jack Margeson"} style={{ color: "#181a1b" }}>Jack Margeson</option>
                    <option value={"Al Ayoola"} style={{ color: "#181a1b" }}>Al Ayoola</option>
                </NativeSelect>
            </FormControl>
        </div >
    );
}

export default ProfilePage;
