import React, { useState, useRef } from "react";
import CategoryEntry from "components/CategoryEntry";
import MonthEntry from "components/MonthEntry";
import DailyEntry from "components/DailyEntry";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import overallStatService from "services/overallStatService";


const OverallStatsInsertion = () => {
  const [categories, setCategories] = useState(
    [
      { category: "", sales: 0 },
      { category: "", sales: 0 },
      { category: "", sales: 0 },
      { category: "", sales: 0 },
    ].map((category, index) => ({ ...category, id: index }))
  );
  
  const theme = useTheme();

  const [totalCustomers, setTotalCustomers] = useState("");
  const [yearlySalesTotal, setYearlySalesTotal] = useState("");
  const [yearlyTotalSoldUnits, setYearlyTotalSoldUnits] = useState("");
  const [year, setYear] = useState("");


  const createCategoryEntry = () => {
    const entry = {
      id: categories.length,
      category: "",
      sales: 0,
    };
    setCategories((prevCategories) => {
      if (prevCategories.length === 0) {
        return [entry];
      } else {
        return [...prevCategories, entry];
      }
    });
  };

  const handleCategoryChange = (id, field, value) => {
    setCategories((prevCategories) => {
      const updatedCategories = prevCategories.map((category) => {
        if (category.id === id) {
          return { ...category, [field]: value };
        }
        return category;
      });
      return updatedCategories;
    });
  };

  const removeCategory = (index) => {
    setCategories((prevCategories) =>
      prevCategories.filter((_, i) => i !== index)
    );
  };

  const [monthlyData, setMonthlyData] = useState(
    new Array(12)
      .fill({ month: "", totalSales: 0, totalUnits: 0 })
      .map((monthData, index) => ({ ...monthData, id: index }))
  );

  const [dailyData, setDailyData] = useState(
    new Array(365)
      .fill({ date: "", totalSales: 0, totalUnits: 0 })
      .map((dailyData, index) => ({ ...dailyData, id: index }))
  );

  const handleMonthDataChange = (index, field, value) => {
    setMonthlyData((prevMonthlyData) => {
      const updatedMonthlyData = [...prevMonthlyData];
      updatedMonthlyData[index] = {
        ...updatedMonthlyData[index],
        [field]: value,
      };
      return updatedMonthlyData;
    });
  };

  const handleDailyDataChange = (index, field, value) => {
    setDailyData((prevDailyData) => {
      const updatedDailyData = [...prevDailyData];
      updatedDailyData[index] = {
        ...updatedDailyData[index],
        [field]: value,
      };
      return updatedDailyData;
    });
  };
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };


  const handleEntryTest = () => {
    setTotalCustomers(getRandomInt(1, 1000));
    setYearlySalesTotal(getRandomInt(100000, 1000000));
    setYearlyTotalSoldUnits(getRandomInt(1000, 10000));
    const currentYear = getRandomInt(2020, 2025);
    setYear(currentYear);

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    setMonthlyData(
      months.map((month) => ({
        month: month,
        totalSales: getRandomInt(1000, 10000),
        totalUnits: getRandomInt(100, 1000),
      }))
    );

    const generateDates = (year) => {
      const dates = [];
      for (let month = 0; month < 12; month++) {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        for (let day = 1; day <= daysInMonth; day++) {
          dates.push(new Date(year, month, day));
        }
      }
      return dates;
    };

    const sequentialDates = generateDates(currentYear);

    setDailyData(
      sequentialDates.map((date) => ({
        date: `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(
          -2
        )}-${("0" + date.getDate()).slice(-2)}`,
        totalSales: getRandomInt(100, 1000),
        totalUnits: getRandomInt(10, 100),
      }))
    );

    setCategories(
      [...Array(3).keys()].map((i) => ({
        category: `Category ${i + 1}`,
        sales: getRandomInt(1000, 10000),
      }))
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      totalCustomers,
      yearlySalesTotal,
      yearlyTotalSoldUnits,
      year,
      monthlyData: monthlyData,
      dailyData: dailyData,
      salesByCategory: Object.fromEntries(
        categories.map((entry) => [entry.category, entry.sales])
      ),
    };

    try {
      await overallStatService.addOverallStat(data);
      alert("Data submitted successfully");
    } catch (error) {
      alert("Error submitting data: " + error.message);
    }
    
  };

  return (
    <Box
      className="App"
      sx={{
        backgroundColor: theme.palette.primary[600],
        color: theme.palette.secondary[300],
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      {/* ... other form elements */}

      <Box component="form" width="100%">
        <Typography variant="h6">Total Customers:</Typography>
        <TextField
          type="number"
          value={totalCustomers}
          onChange={(e) => setTotalCustomers(e.target.value)}
          fullWidth
        />

        <Typography variant="h6">Yearly Sales Total:</Typography>
        <TextField
          type="number"
          step="0.01"
          value={yearlySalesTotal}
          onChange={(e) => setYearlySalesTotal(e.target.value)}
          fullWidth
        />

        <Typography variant="h6">Yearly Total Sold Units:</Typography>
        <TextField
          type="number"
          value={yearlyTotalSoldUnits}
          onChange={(e) => setYearlyTotalSoldUnits(e.target.value)}
          fullWidth
        />

        <Typography variant="h6">Year:</Typography>
        <TextField
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          fullWidth
        />

        <Box
          id="sales-by-category"
          sx={{
            backgroundColor: theme.palette.primary[400],
            borderRadius: "0.55rem",
            padding: "1rem",
            marginTop: "1rem",
          }}
        >
          <Typography variant="h5">Sales by Category</Typography>
          <Box id="category-entries">
            {categories.map((category, index) => (
              <CategoryEntry
                key={category.id}
                index={category.id}
                category={category.category}
                sales={category.sales}
                onCategoryDataChange={handleCategoryChange}
                onRemove={removeCategory}
              />
            ))}
          </Box>
          <Button
            type="button"
            onClick={createCategoryEntry}
            sx={{
              backgroundColor: theme.palette.secondary[300],
              marginTop: "1rem",
            }}
          >
            Add Category
          </Button>
          {/* ... other buttons */}
        </Box>
        <Box
          id="monthly-data"
          sx={{
            backgroundColor: theme.palette.primary[400],
            borderRadius: "0.55rem",
            padding: "1rem",
            marginTop: "1rem",
          }}
        >
          <Typography variant="h5">Monthly Data</Typography>
          {monthlyData.map((monthData, index) => (
            <MonthEntry
              key={monthData.id}
              index={monthData.id}
              month={monthData.month}
              totalSales={monthData.totalSales}
              totalUnits={monthData.totalUnits}
              onMonthDataChange={handleMonthDataChange}
            />
          ))}
        </Box>

        <Box
          id="daily-data-container"
          sx={{
            backgroundColor: theme.palette.primary[400],
            borderRadius: "0.55rem",
            padding: "1rem",
            marginTop: "1rem",
          }}
        >
          <Typography variant="h5">Daily Data</Typography>
          <Box id="daily-data">
            {dailyData.map((dailyEntry, index) => (
              <DailyEntry
                key={dailyEntry.id}
                index={dailyEntry.id}
                date={dailyEntry.date}
                totalSales={dailyEntry.totalSales}
                totalUnits={dailyEntry.totalUnits}
                onDailyDataChange={handleDailyDataChange}
              />
            ))}
          </Box>
        </Box>

        {/* ... other form elements */}
      </Box>

      <Box>
        <Button
          type="button"
          onClick={handleEntryTest}
          sx={{
            backgroundColor: theme.palette.secondary[300],
            marginTop: "1rem",
            mr: "1rem",
          }}
        >
          Entry Test
        </Button>
        <Button
          type="submit"
          onClick={handleSubmit}
          sx={{
            backgroundColor: theme.palette.secondary[300],
            marginTop: "1rem",
          }}
        >
          Submit
        </Button>
      </Box>

      {/* ... other form elements */}
    </Box>
  );
};

export default OverallStatsInsertion;