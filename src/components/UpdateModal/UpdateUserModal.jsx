"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, TextField } from "@heroui/react";
import { BiEdit, BiUser, BiImageAdd } from "react-icons/bi";

export function UpdateUserModal() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    const { data, error } = await authClient.updateUser({
      name,
      image,
    });

    if (error) {
      alert("Something went wrong!");
    }
  };

  return (
    <Modal>
      {/* Trigger Button */}
      <Button 
        variant="bordered" 
        className="border-slate-200 hover:border-orange-500 font-bold rounded-2xl flex items-center gap-2 transition-all"
      >
        <BiEdit className="text-orange-500" /> Update Profile
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-md border-none shadow-2xl rounded-[2.5rem] bg-white overflow-hidden">
            <Modal.CloseTrigger className="absolute right-4 top-4 hover:bg-slate-100 rounded-full p-1" />
            
            <Modal.Header className="flex flex-col gap-1 pt-8 px-8">
              <div className="bg-orange-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-2">
                <BiUser className="size-6 text-orange-500" />
              </div>
              <Modal.Heading className="text-2xl font-black text-slate-900">
                Update Settings
              </Modal.Heading>
              <p className="text-sm text-slate-500">Change your profile name and avatar URL</p>
            </Modal.Header>

            <Modal.Body className="p-8 pt-4">
              <form onSubmit={onSubmit} className="flex flex-col gap-5">
                <TextField className="w-full" name="name" type="text">
                  <Label className="text-slate-700 font-bold text-sm mb-1 ml-1 block">Display Name</Label>
                  <Input 
                    placeholder="Enter your name" 
                    variant="bordered"
                    className="rounded-xl border-slate-200 focus-within:border-orange-500 transition-colors"
                    startContent={<BiUser className="text-slate-400" />}
                  />
                </TextField>

                <TextField className="w-full" name="image" type="url">
                  <Label className="text-slate-700 font-bold text-sm mb-1 ml-1 block">Profile Picture URL</Label>
                  <Input 
                    placeholder="https://image-link.com" 
                    variant="bordered"
                    className="rounded-xl border-slate-200 focus-within:border-orange-500 transition-colors"
                    startContent={<BiImageAdd className="text-slate-400" />}
                  />
                </TextField>

                <Modal.Footer className="px-0 pt-4 flex gap-3">
                  <Button 
                    slot="close" 
                    variant="light" 
                    className="flex-1 font-bold rounded-xl text-slate-500 hover:bg-slate-50"
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    slot="close" 
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-xl shadow-lg shadow-orange-100"
                  >
                    Save Changes
                  </Button>
                </Modal.Footer>
              </form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}