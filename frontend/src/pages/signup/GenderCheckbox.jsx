
const GenderCheckbox = ({onCheckboxChange,selectedGender}) => {
    return (
        <div className="flex">
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer ${selectedGender==="male" ? "selected":""}`}>
                    <span className="label-text">Male</span>
                    <input type="checkbox" className="checkbox border-slate-900" 
                    //below 2lines foe gender onnu mattumdha select panna mudium male or female only..rendu gender um select pandra option avoid panna 
                    checked={selectedGender ==="male"}//if selected gender is equal to male
                    onChange={()=>onCheckboxChange("male")}
                    />
                </label>
            </div>

            <div className="form-control">
                <label className={`label gap-2 cursor-pointer ${selectedGender==="female" ? "selected" : ""}`}>
                    <span className="label-text">Female</span>
                    <input type="checkbox" className="checkbox border-slate-900"
                     checked={selectedGender ==="female"}//if selected gender is equal to female
                     onChange={()=>onCheckboxChange("female")}
                      />
                </label>
            </div>


        </div>
    )
}

export default GenderCheckbox



//STARTER CODE OF THE GENDERCHECKBOX COMPONENT

// const GenderCheckbox = () => {
//     return (
//         <div className="flex">
//             <div className="form-control">
//                 <label className="label gap-2 cursor-pointer">
//                     <span className="label-text">Male</span>
//                     <input type="checkbox" className="checkbox border-slate-900" />
//                 </label>
//             </div>

//             <div className="form-control">
//                 <label className="label gap-2 cursor-pointer">
//                     <span className="label-text">Female</span>
//                     <input type="checkbox" className="checkbox border-slate-900" />
//                 </label>
//             </div>


//         </div>
//     )
// }

// export default GenderCheckbox

