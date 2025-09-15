import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "./supabase";
import { Section, Glass, Title , SkillList, SkillItem, SkillName, SkillLevel } from "./layouts";


export default function SkillsSection() {
  const [skills, setSkills] = useState([]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  useEffect(() => {
    const fetchSkills = async () => {
      const { data, error } = await supabase.from("skills").select("*").order("id");
      if (error) console.error("Error fetching skills:", error);
      else setSkills(data.map(s => ({ ...s, level: s.level || 10 })));
    };

    fetchSkills();
  }, []);

  return (
    <Section id="skills">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Glass>
          <Title>Skills</Title>
          <SkillList>
            {skills.map(skill => (
              <SkillItem key={skill.id}>
                <SkillName>{skill.name}</SkillName>
                <SkillLevel level={(skill.level / 10) * 100} />
              </SkillItem>
            ))}
          </SkillList>
        </Glass>
      </motion.div>
    </Section>
  );
}
