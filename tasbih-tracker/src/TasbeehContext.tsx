import { createContext, useState, useEffect, type ReactNode } from "react";

interface TasbeehContextType {
  total: number;
  addToTotal: (count: number) => void;
  resetTotal: () => void;
}

export const TasbeehContext = createContext<TasbeehContextType>({
  total: 0,
  addToTotal: () => {},
  resetTotal: () => {},
});

const TasbeehProvider = ({ children }: { children: ReactNode }) => {
  const [total, setTotal] = useState<number>(0);

  // 🕋 Load saved total when app starts
  useEffect(() => {
    const savedTotal = localStorage.getItem("tasbeeh-total");
    if (savedTotal !== null) {
      setTotal(parseInt(savedTotal, 10));
    }
  }, []);

  // 💾 Save to localStorage whenever total changes
useEffect(() => {
  console.log("💾 Saving total:", total);
  localStorage.setItem("tasbeeh-total", total.toString());
}, [total]);

  const addToTotal = (count: number) => {
    setTotal((prev) => prev + count);
  };

  const resetTotal = () => {
    setTotal(0);
    localStorage.removeItem("tasbeeh-total");
  };

  return (
    <TasbeehContext.Provider value={{ total, addToTotal, resetTotal }}>
      {children}
    </TasbeehContext.Provider>
  );
};

export default TasbeehProvider;
