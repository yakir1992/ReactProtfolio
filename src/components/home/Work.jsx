// import { useState, useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Icon } from '@iconify/react';
import educationIcon from '@iconify-icons/cil/education';
import devIcon from '@iconify-icons/fa-brands/dev';
import "react-vertical-timeline-component/style.min.css";
import { Box, Badge , Center, Heading, useColorMode } from "@chakra-ui/react"

export default function Work() {
    const { colorMode } = useColorMode();
    // const [durantion, setDurantion] = useState(0);
    // const today = new Date()
    const mainIT = ['Active Directory', 'SCCM', 'ControlUp VMWare', 'Linux/Windows Servers', 'VMware Horizon', 'Azure', 'OFFICE365', 'DOCUMENTOM', 'BASH', 'POWERSHELL']
    const mainStack = ['HTML','CSS', 'JavaScript','TypeScript','Bootstrap','React','Angular','Redux','Python', 'PHP','Laravel','Git', 'GitHub']
    var mainTec = mainIT.map((p, i) => {
      return (
        <Badge fontSize="0.8em" ml={1} borderWidth="1px" p={1} m={1}  borderRadius="10" key={i}>
          {p}
        </Badge>
      );
    });


    var mainTecStack = mainStack.map((p, i) => {
      return (
        <Badge fontSize="0.8em" ml={1} borderWidth="1px" p={1} m={1}  borderRadius="10" key={i}>
          {p}
        </Badge>
      );
    });
    // function monthDiff(d1, d2) {
    //   var months;
    //   months = (d2.getFullYear() - d1.getFullYear()) * 12;
    //   months -= d1.getMonth();
    //   months += d2.getMonth();
    //   return months <= 0 ? 0 : months;
    // }
    // useEffect(() => {
    //   setDurantion(monthDiff(new Date('27/07/2021'), today))
    // }, [setDurantion])
    

    return (
      <Box mt={100}>
        <Center>
          <Box backgroundColor={`mode.${colorMode}.background`} sx={{ border: 'solid black 3px', borderRadius: 15, marginBottom: 10}} >
            <Heading p={50}>
              Work Exprience 
            </Heading>
          </Box>
        </Center>
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent'}}
            contentArrowStyle={{ borderRight: '7px solid' }}
            // date={`27 july 2021 - present (${durantion})`}
            date={`July 2016 - Present`}
            dateClassName="vertical-timeline-element-date--work"
            iconStyle={{ background: '#CAC0A5'}}
            icon={<Icon icon={devIcon} />}
          >
            <Box p={15}  sx={{ background: `mode.${colorMode}.background`}} boxShadow="dark-lg" shadow="md" borderWidth="1px"  borderRadius="16">
              <Heading as="h3" size="lg">
                Full Stack Developer
              </Heading>
              <Heading as="h4" size="md" color="orange" pt={2}>
                BHDigital Software 
              </Heading>
              <p fontSize="xl">Responsible for initial design, set up and implementation of the company websites.
              </p>
              <p fontSize="xl">Lead and participate in the design and deployment of client/server, multitier applications.
              </p>
              <p fontSize="xl">Development of Web application from scratch & development of a responsive Front-end with UX practice with React
              </p>
              <p>
              The technologies I'm working with: 
              <div style={{ textAlign: "left", marginBottom: "4px", padding: "4px" }}>
                {mainTecStack}
              </div>
              </p>
            </Box>
          </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent'}}
            contentArrowStyle={{ borderRight: '7px solid' }}
            date="May 2016 - Present"
            iconStyle={{ background: '#CAC0A5'}}
            icon={<Icon icon={devIcon} />}
          >
            <Box p={15} sx={{ background: `mode.${colorMode}.background`}} boxShadow="dark-lg" shadow="md" borderWidth="1px"  borderRadius="16">
              <Heading as="h3" size="lg">
                IT Administartor
              </Heading>
              <Heading as="h4" size="md" color="orange" pt={2}>
                National Insurance Institute
              </Heading>
              <p>Responsible for the upkeep, configuration, and reliable operation of client computer systems, servers, and data security systems..</p>
              <p>
                Technologies worked with: 
              <div style={{ textAlign: "left", marginBottom: "4px", padding: "4px" }}>
                {mainTec}
              </div>
              </p>
            </Box>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Box>
    );
  }