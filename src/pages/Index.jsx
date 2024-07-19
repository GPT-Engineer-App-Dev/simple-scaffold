import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

const Index = () => {
  const [inputValue, setInputValue] = React.useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    alert(`You entered: ${inputValue}`);
    setInputValue("");
  };

  return (
    <div className="container mx-auto mt-10">
      <Card className="w-[350px] mx-auto">
        <CardHeader>
          <CardTitle>Bare-bones App</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            type="text"
            placeholder="Enter something..."
            value={inputValue}
            onChange={handleInputChange}
          />
        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit}>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;