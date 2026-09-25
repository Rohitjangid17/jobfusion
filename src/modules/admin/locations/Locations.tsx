import { DeleteOutlined, DownloadOutlined, EditOutlined, EyeOutlined, FileExcelOutlined, FilePdfOutlined, MoreOutlined, PlusOutlined, SearchOutlined, } from "@ant-design/icons";
import { Button, Dropdown, Input, Select, Table, Tag, Tooltip, } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { MenuProps } from "antd";
import type { Location } from "../admin.interface";

const locations: Location[] = [
    {
        key: "1",
        city: "Jaipur",
        state: "Rajasthan",
        country: "India",
        pincode: "302001",
        status: "Active",
    },
    {
        key: "2",
        city: "Udaipur",
        state: "Rajasthan",
        country: "India",
        pincode: "313001",
        status: "Active",
    },
    {
        key: "3",
        city: "Jodhpur",
        state: "Rajasthan",
        country: "India",
        pincode: "342001",
        status: "Active",
    },
    {
        key: "4",
        city: "Mumbai",
        state: "Maharashtra",
        country: "India",
        pincode: "400001",
        status: "Active",
    },
    {
        key: "5",
        city: "Pune",
        state: "Maharashtra",
        country: "India",
        pincode: "411001",
        status: "Active",
    },
    {
        key: "6",
        city: "New Delhi",
        state: "Delhi",
        country: "India",
        pincode: "110001",
        status: "Active",
    },
    {
        key: "7",
        city: "Bengaluru",
        state: "Karnataka",
        country: "India",
        pincode: "560001",
        status: "Active",
    },
    {
        key: "8",
        city: "Hyderabad",
        state: "Telangana",
        country: "India",
        pincode: "500001",
        status: "Inactive",
    },
    {
        key: "9",
        city: "Chennai",
        state: "Tamil Nadu",
        country: "India",
        pincode: "600001",
        status: "Active",
    },
    {
        key: "10",
        city: "Ahmedabad",
        state: "Gujarat",
        country: "India",
        pincode: "380001",
        status: "Active",
    },
];

const Locations = () => {
    const actionMenu = (record: Location): MenuProps => ({
        items: [
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
                key: "status",
                label: record.status === "Active" ? "Deactivate" : "Activate",
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
        ],
        onClick: ({ key }) => {
            console.log(`${key} location:`, record);
        },
    });

    const exportMenu: MenuProps = {
        items: [
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
        ],
        onClick: ({ key }) => {
            console.log(`Export ${key}`);
        },
    };

    const columns: ColumnsType<Location> = [
        {
            title: "City",
            dataIndex: "city",
            key: "city",
            width: 180,
            render: (city: string) => (
                <Tooltip title={city}>
                    <span className="block max-w-[160px] truncate font-medium text-[#0F172A]">
                        {city}
                    </span>
                </Tooltip>
            ),
        },
        {
            title: "State",
            dataIndex: "state",
            key: "state",
            width: 180,
            render: (state: string) => (
                <Tooltip title={state}>
                    <span className="block max-w-[160px] truncate text-sm text-[#475467]">
                        {state}
                    </span>
                </Tooltip>
            ),
        },
        {
            title: "Country",
            dataIndex: "country",
            key: "country",
            width: 160,
            render: (country: string) => (
                <span className="text-sm text-[#475467]">{country}</span>
            ),
        },
        {
            title: "Pincode",
            dataIndex: "pincode",
            key: "pincode",
            width: 140,
            render: (pincode: string) => (
                <span className="text-sm text-[#475467]">{pincode}</span>
            ),
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            width: 120,
            render: (status: Location["status"]) => (
                <Tag
                    color={status === "Active" ? "success" : "default"}
                    className="!rounded-full !px-3"
                >
                    {status}
                </Tag>
            ),
        },
        {
            title: "Actions",
            key: "actions",
            width: 80,
            fixed: "right",
            render: (_, record) => (
                <Dropdown
                    menu={actionMenu(record)}
                    trigger={["click"]}
                    placement="bottomRight"
                >
                    <Button
                        type="text"
                        icon={<MoreOutlined />}
                        className="!flex !items-center !justify-center !rounded-lg"
                    />
                </Dropdown>
            ),
        },
    ];

    return (
        <div className="flex h-full flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                    <Input
                        prefix={<SearchOutlined className="text-[#98A2B3]" />}
                        placeholder="Search locations"
                        allowClear
                        className="!w-[240px] !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                    />

                    <Select
                        placeholder="Country"
                        allowClear
                        className="!w-[150px]"
                        options={[
                            {
                                label: "India",
                                value: "India",
                            },
                            {
                                label: "United States",
                                value: "United States",
                            },
                            {
                                label: "United Kingdom",
                                value: "United Kingdom",
                            },
                        ]}
                    />

                    <Select
                        placeholder="State"
                        allowClear
                        className="!w-[170px]"
                        options={[
                            {
                                label: "Rajasthan",
                                value: "Rajasthan",
                            },
                            {
                                label: "Maharashtra",
                                value: "Maharashtra",
                            },
                            {
                                label: "Karnataka",
                                value: "Karnataka",
                            },
                            {
                                label: "Delhi",
                                value: "Delhi",
                            },
                            {
                                label: "Gujarat",
                                value: "Gujarat",
                            },
                        ]}
                    />

                    <Select
                        placeholder="Status"
                        allowClear
                        className="!w-[130px]"
                        options={[
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

                <div className="flex items-center gap-2">
                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        className="!rounded-[20px] !bg-[#0052CC] !px-4 !py-2 !text-white !shadow-none"
                    >
                        Add Location
                    </Button>

                    <Dropdown menu={exportMenu} trigger={["click"]}>
                        <Button
                            icon={<DownloadOutlined />}
                            className="!rounded-full !border !border-solid !border-[#D1D6DC] !bg-white !px-4 !py-2 !text-[#0F172A] !shadow-none"
                        >
                        </Button>
                    </Dropdown>
                </div>
            </div>

            <div className="min-h-0 flex-1 rounded-2xl bg-white p-4 shadow-[0px_4px_32px_0px_#98A2B31F]">
                <Table
                    columns={columns}
                    dataSource={locations}
                    rowKey="key"
                    scroll={{
                        y: "calc(100vh - 319px)",
                    }}
                    pagination={{
                        pageSize: 10,
                        position: ["bottomRight"],
                        showSizeChanger: false,
                    }}
                    className="locations-table"
                />
            </div>
        </div>
    );
};

export default Locations;