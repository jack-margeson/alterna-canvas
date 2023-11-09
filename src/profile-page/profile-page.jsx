import "./profile-page.scss";
import * as React from 'react';
import NativeSelect from '@mui/material/NativeSelect';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

function ProfilePage({childToParent}) {
    childToParent("Classes");
    
    const userAlex = () =>{
        document.getElementById("profile-avatar").textContent = "AY"
    }
    const userKody = () => {
        document.getElementById("profile-avatar").textContent = "KP"
        
    }
    const userJack = () => {
        document.getElementById("profile-avatar").textContent = "JM"
    }
    const userAl = () => {
        document.getElementById("profile-avatar").textContent = "AA"
    }
	return(
        <div>
            <FormControl style={{
                width: "90%",
                margin: "10px"
            }}>
                <InputLabel variant="standard">
                User
                </InputLabel>
                <NativeSelect
                    id="user"
                    defaultValue={"Alex Yang"}
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
                    <option value={"Alex Yang"}>Alex Yang</option>
                    <option value={"Kody Penn"}>Kody Penn</option>
                    <option value={"Jack Margeson"}>Jack Margeson</option>
                    <option value={"Al Ayoola"}>Al Ayoola</option>
                </NativeSelect>
            </FormControl>
        </div>
    );
}

export default ProfilePage;
