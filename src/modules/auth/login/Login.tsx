import { Button, Card, Checkbox, Form, Input, Tabs, Typography, } from "antd";
import { LockOutlined, MailOutlined, } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (values: { email: string, password: string }, role: string) => {
        console.log(role, values);
    };

    const renderLoginForm = (role: string) => (
        <Form layout="vertical" onFinish={(values) => handleLogin(values, role)} autoComplete="off">
            <Form.Item label="Email" name="email" rules={[
                {
                    required: true,
                    message: "Please enter your email",
                },
            ]}>
                <Input size="large" prefix={<MailOutlined />} placeholder="Enter your email" />
            </Form.Item>

            <Form.Item label="Password" name="password" rules={[
                {
                    required: true,
                    message: "Please enter your password",
                },
            ]}>
                <Input.Password size="large" prefix={<LockOutlined />} placeholder="Enter your password" />
            </Form.Item>

            <div className="flex justify-between items-center mb-6">
                <Checkbox>Remember me</Checkbox>

                <Button type="link" className="!p-0" onClick={() => navigate('/auth/forgot-password')}>
                    Forgot Password?
                </Button>
            </div>

            <Button type="primary" htmlType="submit" size="large" block className="!rounded-xl">
                Login as {role}
            </Button>
        </Form>
    );

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 p-6">
            <Card
                className="w-full max-w-md rounded-3xl shadow-xl"
                styles={{
                    body: {
                        padding: 32,
                    },
                }}
            >
                <div className="text-center mb-8">
                    <div className="text-4xl mb-3">🚀</div>

                    <Title level={2} className="!mb-1">
                        JobFusion
                    </Title>

                    <Text type="secondary">
                        Applicant Tracking System
                    </Text>
                </div>

                <Tabs
                    centered
                    defaultActiveKey="recruiter"
                    items={[
                        {
                            key: "recruiter",
                            label: "Recruiter",
                            children: renderLoginForm("Recruiter"),
                        },
                        {
                            key: "candidate",
                            label: "Candidate",
                            children: renderLoginForm("Candidate"),
                        },
                        {
                            key: "admin",
                            label: "Admin",
                            children: renderLoginForm("Admin"),
                        },
                        {
                            key: "super-admin",
                            label: "Super Admin",
                            children: renderLoginForm("Super Admin"),
                        },
                    ]}
                />
            </Card>
        </div>
    );
};

export default Login;