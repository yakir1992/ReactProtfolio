import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Icon } from '@iconify/react';
import certificate20Filled from '@iconify-icons/fluent/certificate-20-filled';
import educationIcon from '@iconify-icons/cil/education';
import "react-vertical-timeline-component/style.min.css";
import { Box, Badge , Center, Heading, useColorMode } from "@chakra-ui/react"

export default function Path() {
    const { colorMode } = useColorMode();
    const DevOps = ['Operating Systems (Linux) & bash scripitng', 'Version Control With Git', 'Build & Package Manager Tools (npm, gradle)', 'Cloud & IaaS', 'Artifact Repo Manager', 'Containers', 'Build Automation(CI/CD)', 'AWS Services', 'Container Orchesration', 'K8s on AWS', 'IaC with Terraform', 'Automation with Python', 'Configuration Management']
    const johnBryce = ['HTML', 'CSS', 'JavaScript', 'PHP', 'OOP Programming', 'Relational Databases Management Systems (MySQL)', 'Database Administration', 'Client-Server Architecture']
    var mainBach = DevOps.map((p, i) => {
      return (
        <Badge fontSize="0.8em" ml={1} borderWidth="1px" p={1} m={1}  borderRadius="10" key={i}>
          {p}
        </Badge>
      );
    });

    var mainDeu = johnBryce.map((p, i) => {
      return (
        <Badge fontSize="0.8em" ml={1} borderWidth="1px" p={1} m={1}  borderRadius="10" key={i}>
          {p}
        </Badge>
      );
    });

    return (
      <Box mt={100}>
        <Center>
          <Box backgroundColor={`mode.${colorMode}.background`} sx={{ border: 'solid black 3px', borderRadius: 15, marginBottom: 10}} >
            <Heading p={50}>
              Education Path
            </Heading>
          </Box>
        </Center>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent'}}
            contentArrowStyle={{ borderRight: '7px solid' }}
            date="Sep 2020 - Jun 2021"
            iconStyle={{ background: '#CAC0A5'}}
            icon={<Icon icon={educationIcon} />}
          >
            <Box p={15}  sx={{ background: `mode.${colorMode}.background`}} boxShadow="dark-lg" shadow="md" borderWidth="1px"  borderRadius="16">
             <Heading as="h3" size="lg">
                DevOps Engineer
              </Heading>
              <Heading as="h4" size="md" color="orange" pt={2}>
                at Tech World With Nana
              </Heading>
              <p>
                Bootcamp main programme : 
              <div style={{ textAlign: "left", marginBottom: "4px", padding: "4px" }}>
                {mainBach}
              </div>
              </p>
            </Box>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent'}}
            contentArrowStyle={{ borderRight: '7px solid' }}
            date="May 2015 - April 2016"
            iconStyle={{ background: '#CAC0A5'}}
            icon={<Icon icon={educationIcon} />}
          >
            <Box p={15} sx={{ background: `mode.${colorMode}.background`}} boxShadow="dark-lg" shadow="md" borderWidth="1px"  borderRadius="16">
              <Heading as="h3" size="lg">
                PHP Web Expert <br/>(Full Stack Developer)
              </Heading>
              <Heading as="h4" size="md" color="orange" pt={2}>
                at JohnBryce (hi-tech college)
              </Heading>
              <p>
                The main programme : 
                <div style={{ textAlign: "left", marginBottom: "4px", padding: "4px" }}>
                  {mainDeu}
                </div>
              </p>
            </Box>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Box>
    );
  }