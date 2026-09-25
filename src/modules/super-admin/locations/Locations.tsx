import { DeleteOutlined, DownloadOutlined, EditOutlined, EyeOutlined, FileExcelOutlined, FilePdfOutlined, MoreOutlined, PlusOutlined, } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Input, Select, Table, Tag, Tooltip, } from "antd";
import type { MenuProps } from "antd";
import type { Location } from "../superadmin.interface";

const Locations = () => {
    const locations: Location[] = [
        {
            key: 1,
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            pincode: "302001",
            status: "Active",
        },
        {
            key: 2,
            city: "Udaipur",
            state: "Rajasthan",
            country: "India",
            pincode: "313001",
            status: "Active",
        },
        {
            key: 3,
            city: "Jodhpur",
            state: "Rajasthan",
            country: "India",
            pincode: "342001",
            status: "Active",
        },
        {
            key: 4,
            city: "Mumbai",
            state: "Maharashtra",
            country: "India",
            pincode: "400001",
            status: "Active",
        },
        {
            key: 5,
            city: "Pune",
            state: "Maharashtra",
            country: "India",
            pincode: "411001",
            status: "Active",
        },
        {
            key: 6,
            city: "New Delhi",
            state: "Delhi",
            country: "India",
            pincode: "110001",
            status: "Active",
        },
        {
            key: 7,
            city: "Bengaluru",
            state: "Karnataka",
            country: "India",
            pincode: "560001",
            status: "Active",
        },
        {
            key: 8,
            city: "Hyderabad",
            state: "Telangana",
            country: "India",
            pincode: "500001",
            status: "Active",
        },
        {
            key: 9,
            city: "Chennai",
            state: "Tamil Nadu",
            country: "India",
            pincode: "600001",
            status: "Inactive",
        },
        {
            key: 10,
            city: "Ahmedabad",
            state: "Gujarat",
            country: "India",
            pincode: "380001",
            status: "Active",
        },
    ];

    const exportItems: MenuProps["items"] = [
        {
            key: "csv",
            icon: <FileExcelOutlined />,
            label: "Export CSV",
        },
        {
            key: "pdf",
            icon: <FilePdfOutlined />,
            label: "Export PDF",
        },
    ];

    const actionItems = (): MenuProps["items"] => [
        {
            key: "view",
            icon: <EyeOutlined />,
            label: "View",
        },
        {
            key: "edit",
            icon: <EditOutlined />,
            label: "Edit",
        },
        {
            key: "toggle-status",
            label: "Activate / Deactivate",
        },
        {
            type: "divider",
        },
        {
            key: "delete",
            icon: <DeleteOutlined />,
            label: "Delete",
            danger: true,
        },
    ];

    const columns = [
        {
            title: "City",
            dataIndex: "city",
            key: "city",
            width: 220,
            render: (city: string) => (
                <div className="flex items-center gap-3">
                    <Avatar
                        size={40}
                        className="!h-10 !w-10 !min-w-10 !flex-shrink-0 !bg-[#E8F0FF] !text-[#0052CC]"
                    >
                        {city.charAt(0)}
                    </Avatar>

                    <div className="min-w-0">
                        <Tooltip title={city}>
                            <div className="truncate font-medium text-[#0F172A]">
                                {city}
                            </div>
                        </Tooltip>
                    </div>
                </div>
            ),
        },
        {
            title: "State",
            dataIndex: "state",
            key: "state",
            width: 180,
        },
        {
            title: "Country",
            dataIndex: "country",
            key: "country",
            width: 150,
        },
        {
            title: "Pincode",
            dataIndex: "pincode",
            key: "pincode",
            width: 130,
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            width: 120,
            render: (status: Location["status"]) => (
                <Tag
                    color={
                        status === "Active"
                            ? "success"
                            : "error"
                    }
                    className="!rounded-full !px-3"
                >
                    {status}
                </Tag>
            ),
        },
        {
            title: "Actions",
            key: "actions",
            width: 90,
            fixed: "right" as const,
            render: (_: unknown, record: Location) => (
                <Dropdown
                    menu={{
                        items: actionItems(),
                        onClick: ({ key }) => {
                            console.log(key, record);
                        },
                    }}
                    trigger={["click"]}
                >
                    <Tooltip title="Actions">
                        <Button
                            type="text"
                            icon={<MoreOutlined />}
                            className="!h-8 !w-8 !rounded-lg"
                        />
                    </Tooltip>
                </Dropdown>
            ),
        },
    ];

    return (
        <div className="flex h-full flex-col gap-4">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-3">
                    <Input
                        placeholder="Search locations"
                        className="!w-[240px] !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                    />

                    <Select
                        placeholder="Country"
                        className="!w-[150px]"
                        options={[
                            {
                                label: "All Countries",
                                value: "all",
                            },
                            {
                                label: "India",
                                value: "India",
                            },
                        ]}
                    />

                    <Select
                        placeholder="State"
                        className="!w-[180px]"
                        options={[
                            {
                                label: "All States",
                                value: "all",
                            },
                            {
                                label: "Rajasthan",
                                value: "Rajasthan",
                            },
                            {
                                label: "Maharashtra",
                                value: "Maharashtra",
                            },
                            {
                                label: "Delhi",
                                value: "Delhi",
                            },
                            {
                                label: "Karnataka",
                                value: "Karnataka",
                            },
                            {
                                label: "Telangana",
                                value: "Telangana",
                            },
                            {
                                label: "Tamil Nadu",
                                value: "Tamil Nadu",
                            },
                            {
                                label: "Gujarat",
                                value: "Gujarat",
                            },
                        ]}
                    />

                    <Select
                        placeholder="Status"
                        className="!w-[140px]"
                        options={[
                            {
                                label: "All Status",
                                value: "all",
                            },
                            {
                                label: "Active",
                                value: "Active",
                            },
                            {
                                label: "Inactive",
                                value: "Inactive",
                            },
                        ]}
                    />
                </div>

                <div className="flex flex-wrap gap-3">
                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        className="!rounded-[20px] !bg-[#0052CC] !px-4 !py-2 !text-white !shadow-none"
                    >
                        Add Location
                    </Button>

                    <Dropdown
                        menu={{ items: exportItems }}
                        trigger={["click"]}
                    >
                        <Button
                            className="!rounded-full !border !border-solid !border-[#D1D6DC] !bg-white !px-4 !py-2 !text-[#0F172A] !shadow-none"
                            title="Export"
                            icon={<DownloadOutlined />}
                        />
                    </Dropdown>
                </div>
            </div>

            {/* Table */}
            <div className="min-h-0 flex-1 rounded-2xl bg-white p-4 shadow-[0px_4px_32px_0px_#98A2B31F]">
                <Table
                    columns={columns}
                    dataSource={locations}
                    rowKey="key"
                    showHeader={locations.length > 0}
                    scroll={{ y: "calc(100vh - 319px)" }}
                    pagination={{
                        pageSize: 10,
                        position: ["bottomRight"],
                        showSizeChanger: false,
                    }}
                    className="table"
                />
            </div>
        </div>
    );
};

export default Locations;