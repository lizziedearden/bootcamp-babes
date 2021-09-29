import {useState} from 'react';

const NewCourse = (props) => {
    const [name, setName] = useState("");
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [subcategory, setSubcategory] = useState("");
    const [cost, setCost] = useState(0);
    const [deadline, setDeadline] = useState("");
    const [location, setLocation] = useState("");
    const [place, setPlace] = useState("");
    const [spacesAvailable, setSpacesAvailable] = useState(0);
    const [signUpThrough, setSignUpThrough] = useState("");

    const onNameChange = (evt => {
        setName(evt.target.value);
    })
    const onRatingChange = (evt => {
        setRating(evt.target.value);
    })
    const onDescriptionChange = (evt => {
        setDescription(evt.target.value);
    })
    const onCategoryChange = (evt => {
        setCategory(evt.target.value);
    })
    const onSubcategoryChange = (evt => {
        setSubcategory(evt.target.value);
    })
    const onCostChange = (evt => {
        setCost(evt.target.value);
    })
    const onDeadlineChange = (evt => {
        setDeadline(evt.target.value);
    })
    const onLocationChange = (evt => {
        setLocation(evt.target.value);
    })
    const onPlaceChange = (evt => {
        setPlace(evt.target.value);
    })
    const onSpacesAvailableChange = (evt => {
        setSpacesAvailable(evt.target.value);
    })
    const onSignUpThroughChange = (evt => {
        setSignUpThrough(evt.target.value);
    })

    const onCourseSubmission = ((evt) => {
        evt.preventDefault();
        const newCourse = {
            name: name,
            rating: rating,
            description: description,
            category: category,
            subcategory: subcategory,
            cost: cost,
            deadline: deadline,
            location: location,
            place: place,
            spacesAvailable: spacesAvailable,
            signUpThrough: signUpThrough
        }
        props.handleCourseSubmission(newCourse);
        setName("");
        setRating(0);
        setDescription("");
        setCategory("");
        setSubcategory("");
        setCost(0);
        setDeadline("");
        setLocation("");
        setPlace("");
        setSpacesAvailable(0);
        setSignUpThrough("");
    })

    return (
        <form on Submit={onCourseSubmission}>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" value={name} onChange={onNameChange}/>
            <label for="rating">Rating:</label>
            <input type="number" id="rating" name="rating" value={rating} onChange={onRatingChange}/>
            <label for="description">Description:</label>
            <input type="text" id="description" name="description" value={description} onChange={onDescriptionChange}/>
            <label for="category">Category:</label>
            <input type="text" id="category" name="category" value={category} onChange={onCategoryChange}/>
            <label for="subcategory">Subcategory:</label>
            <input type="text" id="subcategory" name="subcategory" value={subcategory} onChange={onSubcategoryChange}/>
            <label for="cost">Cost:</label>
            <input type="number" id="cost" name="cost" value={cost} onChange={onCostChange}/>
            <label for="deadline">Deadline:</label>
            <input type="text" id="deadline" name="deadline" value={deadline} onChange={onDeadlineChange}/>
            <label for="location">Location:</label>
            <input type="text" id="location" name="location" value={location} onChange={onLocationChange}/>
            <label for="place">Place:</label>
            <input type="text" id="place" name="place" value={place} onChange={onPlaceChange}/>
            <label for="spacesAvailable">Spaces Available:</label>
            <input type="number" id="spacesAvailable" name="spacesAvailable" value={spacesAvailable} onChange={onSpacesAvailableChange}/>
            <label for="signUpThrough">Sign Up Through:</label>
            <input type="text" id="signUpThrough" name="signUpThrough" value={signUpThrough} onChange={onSignUpThroughChange}/>
        </form>
    )
}

export default NewCourse;