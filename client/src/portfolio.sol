// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0<0.9.0;

contract Portfolio{

    struct Project{
        uint id;
        string name;
        string description;
        string image;
        string githubLink;
    }

    struct Education{
        uint id;
        string date;
        string degree;
        string course;
        string institutionName;
    }
   
    struct Experience{
        uint id;
        string date;
        string post;
        string skill;
        string companyName;
    }

    Project[3] public projects;
    Education[3] public educations;
    Experience[3] public experienceList;


    string public imageLink= "QmZj7c6JgT5dLAyn9BB5pXfSheLD7BHPtFqoaNe232iX1d";
    string public description= "a good knowledge in mern stack, curretly learning web3, and always a DSA solver.";
    string public resumeLink= "QmZj7c6JgT5dLAyn9BB5pXfSheLD7BHPtFqoaNe232iX1d";
    uint projectCount;
    uint educationCount;
    uint experienceCount;

    address public manager;

    constructor(){
        manager=msg.sender;
    }

    modifier onlyManager(){
        require(manager==msg.sender, "you are not the manager");
        _;
    }

    function insertProject(string calldata _name, string calldata _description, string calldata _image, string calldata _githubLink) external {
       require(projectCount<3, " you can have atmost 3 projects.");
       projects[projectCount]=Project(projectCount , _name, _description, _image, _githubLink);
       projectCount++;
    }

    function changeProject(uint _projectCount, string calldata _name, string calldata _description, string calldata _image, string calldata _githubLink) external {
        require(_projectCount>0 && _projectCount<3, "1 to 3 projects allowed");
        projects[projectCount]=Project(_projectCount, _name, _description, _image, _githubLink);
    }
    
    function allProjects() external view returns(Project[3] memory){
        return projects;
    }

    function insertEducation( string calldata _date, string calldata _degree, string calldata _course, string calldata _institutionName)external onlyManager{
        require(educationCount<3, "you can have atmost three education sections.");
        educations[educationCount]=Education(educationCount, _date, _degree, _course, _institutionName);
        educationCount++;
    }
    
    function changeEducation(uint _educationCount, string calldata _date, string calldata _degree, string calldata _course, string calldata _institutionName) external {
        require(_educationCount>0 && _educationCount<=3, "1 to 3 education fields allowed.");
        educations[_educationCount]=Education(_educationCount, _date, _degree, _course, _institutionName);
    }

    function allEducations() external view returns(Education[3] memory){
        return educations;
    }
    
    function insertExperience(string calldata _date, string calldata _post, string calldata _skill, string calldata _companyName) external onlyManager{
        require(experienceCount<3, "you can have atmost 3 experience fields");
        experienceList[experienceCount]=Experience(experienceCount, _date, _post, _skill, _companyName);
        experienceCount++;
    }
   
    function changeExperience(uint _experienceCount, string calldata _date, string calldata _post, string calldata _skill, string calldata _companyName) external {
        require(_experienceCount>0 && _experienceCount<=3 , " 1 to 3 experience section required.");
        experienceList[_experienceCount]=Experience(experienceCount, _date, _post, _skill, _companyName);
    }

    function allExperiences() external view returns(Experience[3] memory){
        return experienceList;
    }
    
    function changeImageLink(string calldata _imageLink) external{
        imageLink=_imageLink;
    }

    function changeResumeLink(string calldata _resumeLink) external {
        resumeLink=_resumeLink;
    }

    function changeDescription(string calldata _description) external {
        description=_description;
    }
    
    function donateForGood() public payable{
        payable(manager).transfer(msg.value);
    }
}

// 03/2007 - 03/2019
// Matriculation
// Science
// MSVM, Berhampur

// 06/2019 - 03/2021
// Intermediate in Science
// Math, Physics, Chemistry
// SVM, Berhampur

// 12/2021 - 06/2025
// B.Tech
// Major: Civil Engineering, Minor: CSE
// NIT Rourkela

// 2022-23
// Technical Team Member
// MERN
// Monday Morning

//2022-23
//Management Team Member
// Management, Communication
// CEST

// 2022-23
// Technical Team Member
// C/C++
// Code Red

// Project Tahiti
// The Client Side Application of Monday Morning NIT Rourkela
// Qmb2WRePvAcHnRLAVJB52YRbfxQ1ueAiQNCYXU4jNH5Sc5
// project-tahiti

// pathFinder
// Knowledge hub for diverse projects across disciplines, empowering student learning.
// QmaNXF2WDFUBx211P1qvHU9vW3isLqaLerByH4DvZQgbyV
// pathFinder

// weather-App
// Accurate forecasts, alerts, and insights for seamless daily planning.
// QmeWXBjbU3g8L2sBsG1xYu5mBbJtkuHeoYYYgZ8QMedLDk
// weather-app