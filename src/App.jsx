import { motion } from "motion/react";

export default function App() {
  return (
    <main className="page">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Merhaba, animasyonlu site
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Motion ile yazılmış ilk giriş animasyonu.
      </motion.p>
    </main>
  );
}
