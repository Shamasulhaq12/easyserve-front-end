"use client";

import { motion } from "framer-motion";
import TableCard from "@/components/admin/TableCard";
import TableSkeleton from "@/components/admin/TableSkeleton";
import { useGetTablesQuery } from "@/services/private/tables";


// const tables = [
//   {
//     id: 1,
//     number: 1,
//     status: "occupied",
//     customers: 3,
//     orderItems: ["Chicken Noodles", "2 Drinks", "Fried Rice"],
//     orderTime: new Date(Date.now() - 10 * 60 * 1000),
//   },
//   {
//     id: 2,
//     number: 2,
//     status: "served",
//     customers: 2,
//     orderItems: ["Pasta", "1 Cold Coffee"],
//     orderTime: new Date(Date.now() - 30 * 60 * 1000),
//   },
// ];

export default function TablesPage() {
  const { data, isLoading, isError } = useGetTablesQuery(undefined, {
  pollingInterval: 5000,
});

  const tables = data?.tables ?? [];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-yellow-700">
        All Tables
      </h2>

      <motion.div
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {isLoading &&
          [...Array(6)].map((_, i) => <TableSkeleton key={i} />)}

        {isError && (
          <p className="text-red-600 font-medium">Failed to load tables.</p>
        )}

        {!isLoading &&
          !isError &&
          tables.map((table) => <TableCard key={table.id} table={table} />)}
      </motion.div>
    </div>
  );
}
