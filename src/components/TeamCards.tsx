"use client";

import { motion } from 'motion/react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const team = [
  {
    name: 'Alex Rivera',
    role: 'Founder & CEO',
    bio: '15+ years building scalable systems. Former lead engineer at tech giants.',
    image: '👨‍💼',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'alex@propello.com'
    }
  },
  {
    name: 'Sarah Chen',
    role: 'Head of Design',
    bio: 'Award-winning designer. Obsessed with creating delightful user experiences.',
    image: '👩‍🎨',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'sarah@propello.com'
    }
  },
  {
    name: 'Marcus Johnson',
    role: 'Lead Engineer',
    bio: 'Full-stack wizard. Passionate about clean code and automation.',
    image: '👨‍💻',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'marcus@propello.com'
    }
  },
  {
    name: 'Emily Park',
    role: 'Automation Specialist',
    bio: 'AI integration expert. Turns complex workflows into simple automations.',
    image: '👩‍🔬',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'emily@propello.com'
    }
  }
];

export const TeamCards = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {team.map((member, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -10 }}
          className="group relative"
        >
          {/* Card with 3D Tilt Effect */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all relative overflow-hidden border border-[var(--dusty-blue)]/10"
            whileHover={{
              rotateY: 5,
              rotateX: -5,
            }}
            transition={{ duration: 0.3 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--midnight-blue)]/0 to-[var(--midnight-blue)]/0 group-hover:from-[var(--midnight-blue)]/5 group-hover:to-[var(--dusty-blue)]/5 transition-all duration-500" />

            <div className="relative z-10">
              {/* Avatar */}
              <motion.div
                className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[var(--midnight-blue)] to-[var(--dusty-blue)] flex items-center justify-center text-5xl shadow-xl"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {member.image}
              </motion.div>

              {/* Info */}
              <h3 className="text-[var(--midnight-blue)] text-xl font-bold mb-1 text-center">
                {member.name}
              </h3>
              <p className="text-[var(--buttercream)] font-medium mb-4 text-center">
                {member.role}
              </p>
              <p className="text-[var(--dusty-blue)] text-sm leading-relaxed text-center mb-6">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <motion.a
                  href={member.social.linkedin}
                  className="w-10 h-10 rounded-full bg-[var(--midnight-blue)] flex items-center justify-center hover:bg-[var(--dusty-blue)] transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="text-white" size={18} />
                </motion.a>
                <motion.a
                  href={member.social.twitter}
                  className="w-10 h-10 rounded-full bg-[var(--midnight-blue)] flex items-center justify-center hover:bg-[var(--dusty-blue)] transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter className="text-white" size={18} />
                </motion.a>
                <motion.a
                  href={`mailto:${member.social.email}`}
                  className="w-10 h-10 rounded-full bg-[var(--midnight-blue)] flex items-center justify-center hover:bg-[var(--dusty-blue)] transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail className="text-white" size={18} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
