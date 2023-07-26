import React, { useEffect, useState } from "react";
import { FaDonate } from "react-icons/fa";
import { Modal, ModalHeader, ModalBody, Row, Button } from "reactstrap";
import "./Projects.css";

const Projects = ({ state }) => {
  const [modal, setModal] = useState(false);
  const [projects, setProjects] = useState("");
  const [eth, setEth] = useState("");
  useEffect(() => {
    const { contract } = state;
    const projectDetails = async () => {
      const projects = await contract.methods.allProjects().call();
      setProjects(projects);
    };
    contract && projectDetails();
  }, [state]);
  const donateEth = async (event) => {
    event.preventDefault();
    try {
      const { contract, web3 } = state;
      const weiValue = web3.utils.toWei(eth, "ether");
      const accounts = await web3.eth.getAccounts();
      await contract.methods
        .donateForGood()
        .send({ from: accounts[0], value: weiValue, gas: 480000 });
      alert("Transaction Succesful");
    } catch (error) {
      alert("Transaction Not Succesful");
    }
  };
  return (
    <section className="project-section">
      <h1 className="title">Projects </h1>
      <div className="card-wrapper">
        {projects !== "" &&
          projects.map((project) => {
            const githubLink = `https://github.com/anish-patro/${project.githubLink}`;
            const imageLink = `https://gateway.pinata.cloud/ipfs/${project.image}`;
            return (
              <a
                href={githubLink}
                className="project-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="card-img">
                  <img src={imageLink} alt="" />
                </div>
                <div className="card-text">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </a>
            );
          })}
      </div>

      <Modal size="md" isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>
          Enter the ETH you want to donate!
        </ModalHeader>
        <ModalBody>
          <form onSubmit={donateEth}>
            <Row>
              <input
                id="eth"
                type="text"
                value={eth}
                onChange={(e) => {
                  setEth(e.target.value);
                }}
              />
              <Button className="mt-4">Send</Button>
            </Row>
          </form>
        </ModalBody>
      </Modal>
      {projects != "" && (
        <p className="donate" onClick={() => setModal(true)}>
          Liked the project's ? Consider donating Eth's
          <FaDonate className="icon" />
        </p>
      )}
    </section>
  );
};

export default Projects;
