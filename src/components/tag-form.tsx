"use client";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const TagForm = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <span className="text-xl">+ &nbsp;</span> New Tag
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Tag</DialogTitle>
          <DialogDescription>Add a new tag for your Team</DialogDescription>
        </DialogHeader>
          <div>
            <Label>Title</Label>
            <Input />
          </div>
          <Button className="w-full">Create Tag</Button>
      </DialogContent>
    </Dialog>
  );
};

export default TagForm;
